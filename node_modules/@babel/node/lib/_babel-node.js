"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _module2 = _interopRequireDefault(require("module"));

var _util = require("util");

var _path = _interopRequireDefault(require("path"));

var _repl = _interopRequireDefault(require("repl"));

var babel = _interopRequireWildcard(require("@babel/core"));

var _vm = _interopRequireDefault(require("vm"));

require("@babel/polyfill");

var _register = _interopRequireDefault(require("@babel/register"));

var _package = _interopRequireDefault(require("../package.json"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var program = new _commander.default.Command("babel-node");

function collect(value, previousValue) {
  if (typeof value !== "string") return previousValue;
  var values = value.split(",");
  return previousValue ? previousValue.concat(values) : values;
}

program.option("-e, --eval [script]", "Evaluate script");
program.option("-p, --print [code]", "Evaluate script and print result");
program.option("-o, --only [globs]", "A comma-separated list of glob patterns to compile", collect);
program.option("-i, --ignore [globs]", "A comma-separated list of glob patterns to skip compiling", collect);
program.option("-x, --extensions [extensions]", "List of extensions to hook into [.es6,.js,.es,.jsx,.mjs]", collect);
program.option("-w, --plugins [string]", "", collect);
program.option("-b, --presets [string]", "", collect);
program.version(_package.default.version);
program.usage("[options] [ -e script | script.js ] [arguments]");
program.parse(process.argv);
(0, _register.default)({
  extensions: program.extensions,
  ignore: program.ignore,
  only: program.only,
  plugins: program.plugins,
  presets: program.presets
});

var replPlugin = function replPlugin(_ref) {
  var t = _ref.types;
  return {
    visitor: {
      ModuleDeclaration: function ModuleDeclaration(path) {
        throw path.buildCodeFrameError("Modules aren't supported in the REPL");
      },
      VariableDeclaration: function VariableDeclaration(path) {
        if (path.node.kind !== "var") {
          throw path.buildCodeFrameError("Only `var` variables are supported in the REPL");
        }
      },
      Program: function Program(path) {
        if (path.get("body").some(function (child) {
          return child.isExpressionStatement();
        })) return;
        path.pushContainer("body", t.expressionStatement(t.identifier("undefined")));
      }
    }
  };
};

var _eval = function _eval(code, filename) {
  code = code.trim();
  if (!code) return undefined;
  code = babel.transform(code, {
    filename: filename,
    presets: program.presets,
    plugins: (program.plugins || []).concat([replPlugin])
  }).code;
  return _vm.default.runInThisContext(code, {
    filename: filename
  });
};

if (program.eval || program.print) {
  var code = program.eval;
  if (!code || code === true) code = program.print;
  global.__filename = "[eval]";
  global.__dirname = process.cwd();

  var _module = new _module2.default(global.__filename);

  _module.filename = global.__filename;
  _module.paths = _module2.default._nodeModulePaths(global.__dirname);
  global.exports = _module.exports;
  global.module = _module;
  global.require = _module.require.bind(_module);

  var result = _eval(code, global.__filename);

  if (program.print) {
    var output = typeof result === "string" ? result : (0, _util.inspect)(result);
    process.stdout.write(output + "\n");
  }
} else {
  if (program.args.length) {
    var args = process.argv.slice(2);
    var i = 0;
    var ignoreNext = false;
    args.some(function (arg, i2) {
      if (ignoreNext) {
        ignoreNext = false;
        return;
      }

      if (arg[0] === "-") {
        var parsedArg = program[arg.slice(2)];

        if (parsedArg && parsedArg !== true) {
          ignoreNext = true;
        }
      } else {
        i = i2;
        return true;
      }
    });
    args = args.slice(i);
    var filename = args[0];

    if (!_path.default.isAbsolute(filename)) {
      args[0] = _path.default.join(process.cwd(), filename);
    }

    process.argv = ["node"].concat(args);
    process.execArgv.unshift(__filename);

    _module2.default.runMain();
  } else {
    replStart();
  }
}

function replStart() {
  _repl.default.start({
    prompt: "> ",
    input: process.stdin,
    output: process.stdout,
    eval: replEval,
    useGlobal: true
  });
}

function replEval(code, context, filename, callback) {
  var err;
  var result;

  try {
    if (code[0] === "(" && code[code.length - 1] === ")") {
      code = code.slice(1, -1);
    }

    result = _eval(code, filename);
  } catch (e) {
    err = e;
  }

  callback(err, result);
}
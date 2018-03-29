import React, { Component } from 'react';

import ReactLoginMS from 'react-ms-login';

import s from './Login.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactLoginMS
          clientId="d3df4603-8e0b-4a6f-bfe2-06257845210f" // required: 'application id/client id' obtained from https://apps.dev.microsoft.com for your app
          redirectUri="http://localhost:3000/about" // required: redirectUri registered in https://apps.dev.microsoft.com for your app
          scopes={['user.read']} // optional: defaults to "user.read" full list is present https://developer.microsoft.com/en-us/graph/docs/concepts/permissions_reference
          responseType="token" // optional: valid values are "token" for `Implicite OAuth flow` and "code" for `Authorization Code flow` defaults to "token"
          cssClass={s.microsoft} // optional: space separated class names which are applied on the html Button element
          btnContent={ButtonContent} // optional: can be string or a valid react component which can be rendered inside html Button element
          handleLogin={data => console.log(data)} // required: callback to receive token/code after successful login
        />
      </div>
    );
  }
}

class ButtonContent extends React.Component {
  render() {
    return (
      <span>
        <svg
          className={s.icon}
          width="20"
          height="30"
          viewBox="0 0 256 257"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <path
            d="M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z"
            fill="#ffffff"
          />
        </svg>
      </span>
    );
  }
}
export default App;

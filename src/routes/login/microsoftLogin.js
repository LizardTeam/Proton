import React, { Component } from 'react';

import ReactLoginMS from "react-ms-login";

class ButtonContent extends React.Component {
    render(){
        return (
        <span>
            MS Login
        </span>)
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactLoginMS
            clientId="d3df4603-8e0b-4a6f-bfe2-06257845210f" // required: 'application id/client id' obtained from https://apps.dev.microsoft.com for your app
            redirectUri="http://localhost:3000/about" // required: redirectUri registered in https://apps.dev.microsoft.com for your app
            scopes={["user.read"]} //optional: defaults to "user.read" full list is present https://developer.microsoft.com/en-us/graph/docs/concepts/permissions_reference
            responseType="token" //optional: valid values are "token" for `Implicite OAuth flow` and "code" for `Authorization Code flow` defaults to "token"
            cssClass="some-css-class" // optional: space separated class names which are applied on the html Button element
            btnContent={ButtonContent} // optional: can be string or a valid react component which can be rendered inside html Button element
            handleLogin={(data) => console.log(data)}// required: callback to receive token/code after successful login
        />
        <ButtonContent/>
      </div>
    );
  }
}

export default App;

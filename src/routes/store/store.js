/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './store.css';

class Store extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  /*
componentDidMount() {
  return fetch("http://10.4.5.114/localservice/webservice/rest/server.php", {
    method: 'POST',
    headers: new Headers({
               'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      }),
    body: "param1=value1&param2=value2" // <-- Post parameters
  })
  .then((response) => response.text())
  .then((responseText) => {
    alert(responseText);
  })
  .catch((error) => {
      console.error(error);
  });

}
  --------------------------------------------------------------------------------

  getPostagePrice = () => {
    fetch('/path/to/server')
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => console.log(data));
  }

  */



  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>Store yeah</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Store);

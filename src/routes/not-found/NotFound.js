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
import s from './NotFound.css';


class NotFound extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
          <div>
            <h1 className = {s.title}>404</h1>
            <h3 className= {s.subheading}>Oops Page Not Found</h3>
            <p className = {s.text} >The page you are looking for doesnot exist or has been moved.</p>
          </div>

    );
  }
}

export default withStyles(s)(NotFound);

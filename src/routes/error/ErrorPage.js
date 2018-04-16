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
import s from './ErrorPage.css';

import LayoutError from '../../components/LayoutError';

class ErrorPage extends React.Component {
  static propTypes = {
    error: PropTypes.shape({
      name: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      stack: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    error: null,
  };

  render() {
    if (__DEV__ && this.props.error) {
      return (
        <div>
          <LayoutError>
            <h1 className = {s.title}>Error</h1>
            <h3 className= {s.subheading}>{this.props.error.name}</h3>
            <pre className = {s.text}>{this.props.error.stack}</pre>
          </LayoutError>
        </div>
      );
    }

    return (
      <div>
        <LayoutError>
            <h1 className = {s.title}>500</h1>
            <h3 className= {s.subheading}>Internal Server Error</h3>
            <p className = {s.text} >Something goes wrong with our servers, please try again later.</p>
        </LayoutError>
      </div>
    );
  }
}

export { ErrorPage as ErrorPageWithoutStyle };
export default withStyles(s)(ErrorPage);

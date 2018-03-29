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
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>Sorry, the page you were trying to view does not exist.</p>
          <iframe width="0%" height="0" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/59337117&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(NotFound);

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

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './LayoutError.css';
import Link from '../Link';
import nf from './404.png';

class LayoutError extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
       <div>
         <div className={s.root}>
            <div className={s.container}>
              <img
              src={nf}
                width="200"
                height="200"
                alt="React"
                />
              <div className= {s.block}>
                {this.props.children}
                <div>
                  <a href="javascript:history.go(-1)" className={s.button}>
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
         </div>
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(LayoutError);

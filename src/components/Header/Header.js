/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';


class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
             <div className={s.logo}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Capa_1" x="0px" y="0px"
              viewBox="0 0 27.793 27.793"
              width="60px"
              height="60px">
              <g>
                <g id="c1_ray">
                  <polygon points="20.972,0 5.076,15.803 10.972,15.803 6.44,27.793 22.716,11.989 16.819,11.989   "
                  fill="#7FC2E5"/>
                </g>
                <g id="Capa_1_29_">
                </g>
                </g>
              </svg>
            </div>
            <span className={s.brandTxt}>Proton</span>

          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);

/*
**Banner
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Proton</h1>
            <p className={s.bannerDesc}>Complex web app</p>
          </div>
*/

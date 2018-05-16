/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import NavigationUser from './NavigationUser';
import Link from '../Link';
import Cart from '../Cart';
import nav from './navigation.svg';

//import nav from 'navigation#shopping-cart';

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: false,
      user: false
    };

    this.userClick = this.userClick.bind(this);
    this.cartClick = this.cartClick.bind(this);
  }

  cartClick() {
    this.setState(
      {
        cart: !this.state.cart}
      )
  }

  userClick() {
    this.setState(
      {
        user: !this.state.user}
      )
  }

  render() {
    return (
      <div className={s.root} role="navigation">

        <Link className={s.link} to= "/">
          <svg className= {s.icon} width="30px" height = "30px">
            <use xlinkHref={ `${ nav +'#shopping-bag' }` } />
          </svg>
          <span className={s.linkText}>Service</span>
        </Link>

        <Link className={s.link}  onClick={this.cartClick} to= "/">
          <svg className= {s.icon} width="30px" height = "30px">
            <use xlinkHref={ `${ nav +'#shopping-cart' }` } />
          </svg>
          <span className={s.linkText}>Cart</span>
        </Link>

        <Link className={cx(s.link,s.account)} onClick={this.userClick} to= "/">
          <svg className= {s.icon} width="30px" height = "30px">
            <use xlinkHref={ `${ nav +'#avatar' }` } />
          </svg>
          <span className={s.linkText}>Hi, [NAME]</span>
        </Link>

          {
            this.state.user &&
            <NavigationUser/>
          }
          {
            this.state.cart &&
            <Cart
            close={this.cartClick}
            />
          }

      </div>
    );
  }
}

export default withStyles(s)(Navigation);


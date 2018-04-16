/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames'
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import Link from '../Link';
import s from './Cart.css';
import it from './item.png';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };

    // This binding is necessary to make `this` work in the callback
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this)
  }

  plus(){
    this.setState({
      count: this.state.count + 1
    });
  }
  minus(){
    if (this.state.count>1) {
      this.setState({
        count: this.state.count - 1
      });
    }
  }


  render() {
    return (
      <div className={s.root}>
        <section className={s.container}>
        <button className = {s.close}></button>
        <h2> Shopping Bag </h2>
          <form>
            <ul className= {s.cartList}>
              <li className = {s.cartItem}>
              <input type="checkbox"/>

                <Link className={cx(s.name,s.link)}>
                <img
                  src={it}
                  width="160"
                  height="90"
                  alt="Testitem"
                />
                  Pepsi soft drink
                </Link>
                <div className={s.quantity}>
                <button className={cx(s.plus,s.button)} onClick={this.plus} type="button" name="button">+</button>
                  <input type="text" name="name" value={this.state.count}/>
                <button className={cx(s.minus,s.button)} onClick={this.minus}  type="button" name="button">-</button>
                </div>
                  <span className={s.price}>$79.00</span>
                  <button className={s.remove}></button>
              </li>
            </ul>
          <div className = {s.total}>
            <p className = {s.sum}>Total price :<span> $79.00 </span></p>
            <button className={s.button} type = "submit">Buy</button>
          </div>
          </form>
        </section>
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Cart);


/*
<ul>
              <li className={s.cartItem}>
                <Link className={cx(s.name,s.link)}>
                  Pepsi soft drink
                </Link>
              </li>
            </ul>
<input className={s.quantity} name="quantity_1" type="text" pattern="[0-9]*"
          value="1" autocomplete="off"/>
          <button type="button" className={s.remove}>×</button>
          <span className={s.price}>$79.00</span>
          */

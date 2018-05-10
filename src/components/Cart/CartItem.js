import React from 'react';
import cx from 'classnames'
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import normalizeCss from 'normalize.css';
import s from './Cart.css';

import Link from '../Link';
class CartItem extends React.Component {

//Changes counter value

// total price counter
// https://stackoverflow.com/questions/45793118/calculating-quantity-and-price-total-in-react
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.quantity
    };

    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this)
  }

  plus() {
    this.setState({
      count: +(this.state.count) + 1
    });
  }
  minus() {
    if(this.state.count > 1) {
      this.setState({
        count: this.state.count - 1
      });
    }
  }

  render() {

    const {
        name,
        quantity,
        price,
        image
      } = this.props;

    return (
      <li className = {s.cartItem}>
        <input type="checkbox"/>
        <Link className={cx(s.name,s.link)}>
          <img src={image} width="160" height="90" alt="Testitem"/>
            {name}
        </Link>
        <div className={s.quantity}>
          <button className={cx(s.plus,s.button)} onClick={this.plus} type="button" name="button">+</button>
          <input type="text" name="name" value={this.state.count}/>
          <button className={cx(s.minus,s.button)} onClick={this.minus}  type="button" name="button">-</button>
        </div>
          <span className={s.price}>
            {price *this.state.count}$
          </span>
          <button className={s.remove}></button>
      </li>
    );
  }
}

export default withStyles(normalizeCss, s)(CartItem);



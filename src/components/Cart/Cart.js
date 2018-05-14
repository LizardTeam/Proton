import React from 'react';
import cx from 'classnames'
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import normalizeCss from 'normalize.css';
import s from './Cart.css';
import emptyImg from './empty.png';

import CartItem from './CartItem';

/*
проход по списку елементов
если список пуст
cartItem: first - child => display flex => пустая корзина

добавить сумматор
*/
class Cart extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <section className={s.container}>
        <button className = {s.close}></button>
        <h2> Shopping Bag </h2>
          <form>
            <ul className= {s.cartList}>

             <CartItem
                key = {678686}
                id = {678686}
                name= {'Fantastic view in a superlocation'}
                quantity={1}
                price= {67}
                image= {'https://a1.muscache.com/im/pictures/109467913/296cdac4_original.jpg?aki_policy=x_medium'}
              />

              <CartItem
                key = {678687}
                id = {678687}
                name= {'Beautiful, best located apartment!'}
                quantity={5}
                price= {900}
                image= {'https://a1.muscache.com/im/pictures/109467913/296cdac4_original.jpg?aki_policy=x_medium'}
              />

              <li className = {cx(s.cartItem,s.cartEmpty)}>
                <b>Your Shopping Cart is empty</b>

              </li>

            </ul>

          <div className = {s.total}>
            <p className = {s.sum}>Total price :<span> 00.00 </span></p>
            <button className={s.button} type = "submit">Buy</button>
          </div>

          </form>
        </section>
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Cart);




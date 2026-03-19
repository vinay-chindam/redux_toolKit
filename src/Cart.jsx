import React from 'react'

import { useSelector } from 'react-redux';

function Cart() {

  const items = useSelector(store => store.cart.items);
  return (
    <div className="cart">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{items.length}</span>
      </div>
  )
}

export default Cart
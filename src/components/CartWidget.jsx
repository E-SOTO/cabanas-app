import React from 'react'
import { Link } from 'react-router-dom'

function CartWidget() {
  return (
    <Link className="navbar-brand" to="/carrito">
        <img src="./assets/shopping-cart.png" alt="Bootstrap" width="30" height="25"/>
    </Link>
  )
}

export default CartWidget
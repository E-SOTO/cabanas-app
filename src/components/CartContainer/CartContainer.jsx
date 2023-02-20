import React, { useContext } from 'react'
import { cartContext } from '../../storage/cartContext'

function CartContainer() {
    const {cart}=useContext(cartContext);

  return (
    <div>
        <h1>Tu Carrito</h1>
        <div>
            {
                cart.map((cabin) => (
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={cabin.imgurl} className="img-fluid rounded-start" alt="img"/>
                            </div>

                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title">{cabin.title}</h3>
                                    <p className="card-text">${cabin.price}</p>
                                    <p className="card-text"><small className="text-muted">Total de noches: {cabin.count}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
            ))
            }
        </div>
    </div>
  )
}

export default CartContainer
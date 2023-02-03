import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../storage/cartContext'
import CartWidget from './CartWidget'

function NavBar() {

  const {getTotalItems} = useContext(cartContext);


  return (
    <>

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="./assets/cabanaAppLogo.png" alt="Bootstrap" width="90" height="85"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classNameName="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex flex-sm-column flex-md-column flex-lg-row justify-content-evenly" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/como-funciona">
                  ¿Cómo funciona?
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/experiencia-cabins">
                  Experiencia Cabins
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/destinos">
                  Destinos
                </Link>
              </li>
            </ul>
            <CartWidget count={getTotalItems()}/>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
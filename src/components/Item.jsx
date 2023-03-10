import React from 'react'
import {Link} from "react-router-dom"

function Item(props) {
    const {title,price,city,description,imgurl,id} = props;
    const urlDetail = `/item/${id}`;
  return (
        <div class="col-sm-12 col-md-4 col-lg-3 my-5">
            <div class="card">
                <Link to={urlDetail}>
                    <img src={imgurl} class="card-img-top" alt="imagen-cabana"/>
                </Link>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{city}</li>
                    <li class="list-group-item">${price} MXN/ Noche</li>
                    <li class="list-group-item"><Link to={urlDetail} class="btn btn-primary">Ver producto</Link></li>

                </ul>
            </div>
        </div>
  )
}

export default Item
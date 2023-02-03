import React from 'react'
import {Link} from "react-router-dom"
import ItemCount from './ItemCount';

function ItemDetails(props) {
    const {title,price,city,description,imgurl,id} = props;
    const urlDetail = `/item/${id}`;
  return (
    <div>
      <Link to={urlDetail}>
        <img src={imgurl} className="card-img-top" alt="imagen-cabana" />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{city}</li>
        <li className="list-group-item">${price} MXN/ Noche</li>
        <li className="list-group-item"></li>
      </ul>
    </div>
  );
}

export default ItemDetails
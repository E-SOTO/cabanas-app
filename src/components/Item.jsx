import React from 'react'

function Item(props) {
    const {title,price,city,description,imgurl} = props;
  return (
    <div class="row">
        <div class="col-12 col-sm-12 col-md-4 col-lg-3">
            <div class="card">
                <img src={imgurl} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{city}</li>
                    <li class="list-group-item">{price}</li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Item
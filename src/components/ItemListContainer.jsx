import React, { useState, useEffect } from 'react'
import getCabins from "../services/mockAsyncService"
import Item from './Item';

function ItemListContainer() {
  const [cabins, setCabins]= useState([]);

  useEffect(()=> {
    getCabins().then((respuesta) => {
      console.log(respuesta);
      setCabins(respuesta);
    });
  },[])

  return (
    <div className='row'>
        {cabins.map((cabin) => (
          <Item
            key={cabin.id}
            id={cabin.id}
            title={cabin.title}
            imgurl={cabin.imgurl}
            description={cabin.description}
            city={cabin.city}
            price={cabin.price}
          />
          ))}
    </div>
  )
}

export default ItemListContainer
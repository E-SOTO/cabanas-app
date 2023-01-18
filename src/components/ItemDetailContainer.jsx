import React, { useState, useEffect } from 'react'
import {getOneCabin} from "../services/mockAsyncService"
import Item from './Item';

function ItemDetailContainer() {
    const [cabin, setCabin]= useState([]);

    useEffect(()=> {
      getOneCabin().then((respuesta) => {
        console.log(respuesta);
        setCabin(respuesta);
      });
    },[])
    
    return (
      <div>
        <Item
              key={cabin.id}
              id={cabin.id}
              title={cabin.title}
              imgurl={cabin.imgurl}
              description={cabin.description}
              city={cabin.city}
              price={cabin.price}
            />
      </div>
    )
}

export default ItemDetailContainer
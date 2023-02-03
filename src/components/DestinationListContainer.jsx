import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import getCabins, { getDestinations } from "../services/mockAsyncService"
import Destination from './Destination';
import Item from './Item';

function DestinationListContainer() {
  const [cabins, setCabins]= useState([]);
  const [destinos, setDestinos] =  useState([]);

  useEffect(()=> {
    getDestinations()
    .then((respuesta) => {
      console.log(respuesta);
      setDestinos(respuesta);
    })
    .catch( (error) => alert(`Error : ${error}`))

    getCabins().then((respuesta) => {
        console.log(respuesta);
        setCabins(respuesta);
      });

  },[])

  
  
  return (
    <div className='row'>
        {destinos.forEach((destino) => (
            <Destination
                city={destino}
            />
            ))
        }
        {/* {cabins.map((cabin) => (
          <Destination
            key={cabin.id}
            id={cabin.id}
            title={cabin.title}
            imgurl={cabin.imgurl}
            description={cabin.description}
            city={cabin.city}
            price={cabin.price}
          />
          ))} */}
    </div>
  )
}


export default DestinationListContainer
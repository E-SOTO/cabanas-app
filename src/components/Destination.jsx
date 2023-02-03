import React from 'react'
import {Link} from "react-router-dom"
import { getCabinsByDestination } from '../services/mockAsyncService';
import Item from './Item';

function Destination(props) {
    const {city} = props;
   /*  const urlDetail = `/item/${id}`; */
   let cabins= getCabinsByDestination();
   console.log("hola")
   
  return (
    <div className='row'>
    <h1>{city}</h1>
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

export default Destination
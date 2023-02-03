import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import {getOneCabin} from "../services/mockAsyncService"
import Item from './Item';
import ItemCount from './ItemCount';
import ItemDetails from './ItemDetails';

function ItemDetailContainer() {
    const [cabin, setCabin]= useState([]);
    
    let { itemid }=useParams();

    function handleAddToCart(){
      Swal.fire(
        '¡Excelente!',
        `Agregaste noche en ${cabin.title} al carrito`,
        'success'
        
      );
      
    }

    useEffect(()=> {
      getOneCabin(itemid)
      .then((respuesta) => {
        console.log(respuesta);
        setCabin(respuesta);
      })
      .catch( (error) => alert(`Error : ${error}`))
    },[])
    
    return (
      <div className="row">
        <div className="d-flex justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-6 my-5">
            <div className="card">
              <ItemDetails
                key={cabin.id}
                id={cabin.id}
                title={cabin.title}
                imgurl={cabin.imgurl}
                description={cabin.description}
                city={cabin.city}
                price={cabin.price}
              />
              <ItemCount />
            </div>
          </div>
        </div>
      </div>
    );
}

export default ItemDetailContainer
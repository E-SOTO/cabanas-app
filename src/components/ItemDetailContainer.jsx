import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {getOneCabin} from "../services/mockAsyncService"
import { cartContext } from '../storage/cartContext';
import ItemCount from './ItemCount';
import ItemDetails from './ItemDetails';

function ItemDetailContainer() {
    const [cabin, setCabin]= useState([]);
    let { itemid }=useParams();
    const MySwal = withReactContent(Swal)

    const {addCabin } = useContext(cartContext);

    const { cart } = useContext(cartContext);


    function handleAddToCart(count){
      console.log("Hola");
      MySwal.fire({
        title:'¡Excelente!',
        text:`Agregaste ${count} noche(s) en ${cabin.title} al carrito`,
        icon:'success'
      });
      cabin.count=count
      addCabin(cabin);
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
              <ItemCount onAddToCart={handleAddToCart}/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ItemDetailContainer
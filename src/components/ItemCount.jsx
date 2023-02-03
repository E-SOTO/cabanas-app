import { useState } from "react";
import ButtonChild from "./ButtonChild";

function ItemCount() {
    const[count,setCount]=useState(0);

    function handleAdd(){
        setCount(count + 1)
    }

    function handleSubstract(){
        setCount(count-1)
    }
    return ( 
        <div>
            <div>
                <h3>¿Cuantas noches desea hospedarse?</h3>
            </div>
            <div class="d-flex justify-content-around">
                <ButtonChild onClick={handleSubstract} className="btn btn-primary">-</ButtonChild>
                <span>{count}</span>
                <ButtonChild onClick={handleAdd} className="btn btn-primary">+</ButtonChild>
            </div>
            <div class="d-flex justify-content-center">
                <ButtonChild className="btn btn-primary">Agregar al carrito</ButtonChild>
            </div>
        </div>
    );
}

export default ItemCount;
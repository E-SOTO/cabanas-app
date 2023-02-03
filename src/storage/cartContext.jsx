import {createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider(props){
    const [cart,setCart] = useState([]);
    /* const [total,setTotal] = useState(0); */

    function addCabin(cabin){
        setCart([...cart,cabin]);
    }

    function removeCabin(){

    }

    function clearCart(){
    }

    function getTotalItems(){
        let total=0;
        cart.forEach((cabin) => (total+= 1));
        return total;
    }

    function getTotalPriceInCart(){
        return 999;
    }

    const value = {cart, addCabin, getTotalItems};
    return(
        <cartContext.Provider value={value}>
            {props.children} 
        </cartContext.Provider>
    );
}
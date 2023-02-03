import {createContext, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import Item from "../components/Item";

export const cartContext = createContext();

export function CartContextProvider(props){
    const [cart,setCart] = useState([]);
    /* const [total,setTotal] = useState(0); */
    const MySwal = withReactContent(Swal)

    function addCabin(cabin){

        const isInCart =cart.some(cabinInCart => cabinInCart.id === cabin.id)
        if(isInCart){
            let newCart= [...cart];
            let index = cart.findIndex(cabinInCart => cabinInCart.id === cabin.id)
            MySwal.fire({
                title:'Oops',
                text:`La cabaña ya se encuentra en el carrito`,
                icon:'warning'
              });
        }else{
            setCart([...cart,cabin]);
        }
    }

    function removeCabin(id){
        setCart(cart.pop());
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
import cabins from "../data/cabins";

function getCabins(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(cabins);
        }, 1);
    });
}

export function getOneCabin(itemid){
    let itemReq = cabins.find(item => {
    return item.id === parseInt(itemid);
    })

    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(itemReq !== undefined)
                resolve(itemReq);
            else
                reject("Item no encontrado en la base de datos.")
        }, 1);
    });
}

export function getDestinations(){
    let findDestinations=cabins.map( (cabin) => cabin.city);
    let destinations=findDestinations.filter((item,index)=>{
    return findDestinations.indexOf(item) === index;
    })  

    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(destinations !== undefined)
                resolve(destinations);
            else
                reject("Destino no encontrado en la base de datos.")
        }, 1);
    });
}

export function getCabinsByDestination(destinationCity){
    return cabins.filter( (cabin) => cabin.city === destinationCity);

}


export default getCabins;
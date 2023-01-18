import cabins from "../data/cabins";

function getCabins(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(cabins);
        }, 2000);
    });
}

export default getCabins;
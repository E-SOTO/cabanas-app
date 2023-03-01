// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, collection, getDocs} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl6_YNogTlzkfsdmeFjbgsuX__JrYS0rA",
  authDomain: "reactfirebasecourse-6bc1d.firebaseapp.com",
  projectId: "reactfirebasecourse-6bc1d",
  storageBucket: "reactfirebasecourse-6bc1d.appspot.com",
  messagingSenderId: "1078452566572",
  appId: "1:1078452566572:web:64426ffd29857624042f89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

export function testApp(){
    console.log("Conectandonos a Firebase",db);
}

export async function getOneCabin(itemid){
    const docRef = doc(db, "cabins" , itemid);
    const snapshot = await getDoc(docRef);
    const docData = snapshot.data();
    docData.id= snapshot.id;
    return docData;
}

export async function getCabins(){
    const cabinsCollection = collection(db, "cabins");
    const querySnapshot = await getDocs(cabinsCollection);

    const dataDocs = querySnapshot.docs.map( (doc) => ({...doc.data(), id: doc.id}))
    return dataDocs

}

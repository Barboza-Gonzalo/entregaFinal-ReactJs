import { info } from "autoprefixer";
import { initializeApp } from "firebase/app";
import {addDoc, getDocs, getDoc , doc ,collection, getFirestore, updateDoc} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD1ad8mVGJy1C9iY_dBPbXvO9kw05CCbyc",
  authDomain: "proyectofinal-reactjs-barboza.firebaseapp.com",
  projectId: "proyectofinal-reactjs-barboza",
  storageBucket: "proyectofinal-reactjs-barboza.appspot.com",
  messagingSenderId: "327253531745",
  appId: "1:327253531745:web:34c698d0ea8ca4b36f1e20"
};

const app = initializeApp(firebaseConfig);


const bdd = getFirestore ()



const prods = [
    {
        "nombre": "Cristal de Amatista",
        "precio": 1500,
        "tipo" : "cristal",
        "stock":6,
        "img":"https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-barboza.appspot.com/o/1.jpg?alt=media&token=7431aabd-14ab-4e07-9702-c6070e0f2cdf"
    } ,

    {
        "nombre":"Cristal de Jade",
        "precio":2000,
        "tipo" : "cristal",
        "stock":5,
        "img":"https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-barboza.appspot.com/o/2.jpg?alt=media&token=409945b6-9a65-4a81-9b41-deaf62ade34e"
    } ,

    {
        "nombre":"Cristal de Onix",
        "precio":1500,
        "tipo" : "cristal",
        "stock":3,
        "img":"https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-barboza.appspot.com/o/3.jpg?alt=media&token=4821d1c3-8e8c-4d51-8314-9d158b35ea81"
    } ,

    {
        "nombre":"Combo de Cistales",
        "precio":8000,
        "tipo" : "cristal",
        "stock":2,
        "img":"https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-barboza.appspot.com/o/4.jpg?alt=media&token=4288314d-47b5-41ff-a448-b64a477ca2e8"
    } ,

    {
        "nombre":"Sahumerio de Mirra",
        "precio":2000,
        "tipo" : "sahumerio",
        "stock":10,
        "img":"https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-barboza.appspot.com/o/5.jpg?alt=media&token=717938df-00a6-4cf1-871c-278a30cbe80b"
    } ,

    {
        "nombre":"Sahumerio de Copal",
        "precio":2000,
        "tipo" : "sahumerio",
        "stock":10,
        "img":"https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-barboza.appspot.com/o/6.jpg?alt=media&token=48a53ba2-85e8-4893-8241-eaba0ef2f670"
    } ,

    {
        "nombre":"Sahumerio de Citronalla",
        "precio":2000,
        "tipo" : "sahumerio",
        "stock":10,
        "img":"https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-barboza.appspot.com/o/7.jpg?alt=media&token=36bd1ac8-9961-4c03-92e5-ee431a41ae47"
    } ,

    {
        "nombre": "Spray Aurico Calma",
        "precio":1000,
        "tipo" : "spray",
        "stock":3,
        "img":"https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-barboza.appspot.com/o/8.jpg?alt=media&token=d31698ca-2ff0-452b-838d-5fd9e8daa05f"
    } ,

    {
        "nombre":"Spray Aurico Energia",
        "precio":1000,
        "tipo" : "spray",
        "stock":5,
        "img":"https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-barboza.appspot.com/o/9.jpg?alt=media&token=fb835fd2-a31b-4d83-b27e-2e3057ec5f99"
    } ,

    {
        "nombre":"Spray Aurico Aire",
        "precio":1000,
        "tipo" : "spray",
        "stock":5,
        "img":"https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-barboza.appspot.com/o/10.jpg?alt=media&token=74575e78-d4ad-4c0f-ab80-c86f5c0c3672"
    } ,

    {
        "nombre":"Spray Aurico Agua",
        "precio":1000,
        "tipo" : "spray",
        "stock":8,
        "img":"https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-barboza.appspot.com/o/11.jpg?alt=media&token=0b083f23-3760-4565-8ec2-2c41114a7e66"
    } ,
    {
        "nombre":"Spray Aurico Tierra",
        "precio":1000,
        "tipo" : "spray",
        "stock":15,
        "img":"https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-barboza.appspot.com/o/12.jpg?alt=media&token=9dbba1ee-9e6b-46cf-b9de-d80c25836309"
    } ,
    {
        "nombre":"Sahumerio de Salvia",
        "precio":2000,
        "tipo" : "sahumerio",
        "stock":10,
        "img":"https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-barboza.appspot.com/o/13.jpg?alt=media&token=dca3f4e5-eaa7-47cf-800e-f03772bd717b"
    } ,
    {
        "nombre":"Sahumerio de Ruda y Romero",
        "precio":2000,
        "tipo" : "sahumerio",
        "stock":6,
        "img":"https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-barboza.appspot.com/o/14.jpg?alt=media&token=2d3ea4ad-5d1b-4772-8c63-c9d5b5d5ba80"
    } ,
    {
        "nombre":"Cristal de Bismuto",
        "precio":8000,
        "tipo" : "cristal",
        "stock":4,
        "img":"https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-barboza.appspot.com/o/15.jpg?alt=media&token=c38ffa64-9ad5-4674-ae35-4e54809aa926"
    } ,
    {
        "nombre":"Cristal de Cuarzo",
        "precio":5000,
        "tipo" : "cristal",
        "stock":10,
        "img":"https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-barboza.appspot.com/o/16.jpg?alt=media&token=968c44cd-01bc-4be4-95af-b9920d96bd37"
    } 




]



export const crearProducto = async ()=>{

    prods.forEach(async(prod)=>{
        await addDoc(collection(bdd , "productos"),{
            nombre:prod.nombre,
            precio:prod.precio,
            tipo : prod.tipo,
            stock:prod.stock,
            img:prod.img,
        })

    })



}


export const obtenerProductos = async () => {
    const productos = await getDocs(collection(bdd , "productos"))
    const item = productos.docs.map(prod => {return{...prod.data(),id:prod.id}})
    return item

}

export const obtenerProducto = async (id) => {
    const producto = await getDoc(doc(bdd , "productos",id))
    const item = {...producto.data(), id: producto.id}
    return item

}




export const actualizarProducto = async (id,info) => {
    await updateDoc(doc(bdd,"productos",id),info)

}


export const crearOrdenCompra = async (cliente, precioTotal , carrito , fecha) =>{
    const ordenCompra = await addDoc(collection(bdd,"ordenesCompra"),{
        cliente:cliente,
        items:carrito,
        importe:precioTotal,
        fecha:fecha,

    })
    return ordenCompra
}


export const obtenerOrdenCompra = async (id)=>{
    const ordenCompra = await getDoc(doc(bdd,"ordenesCompra",id))
    const item = {...ordenCompra.data(),id: ordenCompra.id}
    return item
}
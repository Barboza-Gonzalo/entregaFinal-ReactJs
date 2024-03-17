import { useState,useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { obtenerProductos } from "../firebase/firebase.js";

export const ItemListContainer = () =>{
    const [products , setProducts] = useState([])
    const {idc} = useParams()

    useEffect(()=>{
        obtenerProductos()
            .then(prods=>{
                const productos = prods.filter(prod=> prod.stock > 0)
                if(idc){
                    const filProd = prods.filter(prod=> prod.tipo == idc )
                    setProducts(filProd)
                }else{
                setProducts(productos)}
            })
        },[idc])

        return(
            <div className="row row-cols-4 p-5  bg-danger-subtle">
                <ItemList products={products} plantilla="Item"/>
            </div>
        )
    





}
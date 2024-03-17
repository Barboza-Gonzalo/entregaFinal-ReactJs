import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import {ItemDetail} from "./ItemDetail"
import { obtenerProducto } from "../firebase/firebase.js"
export const ItemDetailsContainer = () => {

const [item,setItem]=useState([])
const {idp}=useParams ()

useEffect (()=>{
    obtenerProducto(idp)
        .then(prod=>setItem(prod))
     
},[idp])

    return(
        <ItemDetail item={item}/>
        
    )
}
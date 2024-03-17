import { Link } from "react-router-dom";
import {useContador} from "../hooks/useContador"
import {toast} from "react-toastify"
import { useCarritoContext } from "../context/CarritoContext";


export const ItemDetail = ({item})=>{
    const {agregarItem} = useCarritoContext()
    const {cont , restar , sumar } = useContador(item.stock , 1 , 1)

    const agregarCarrito = () =>{
        agregarItem (item , cont)
        toast.success(`Producto agregado al carrito correctamente`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
        })

    }




return (
    
        <div className="vh-max w-100 grid bg-danger-subtle">
            <div className="d-flex  row  justify-content-around ">
            <img className=" col-4 h-50 mt-5 p-3 rounded" src={`${item.img}`} alt="" />
            <div className="col-4 d-flex mt-5 flex-column justify-content-around">
                <h2 className="fs-1 fw-bolder text-center text-dark-emphasis ">{item.nombre}</h2>
                <p className="fs-2 fw-medium text-dark-emphasis">Precio: ${item.precio}</p>
                <p className=" fs-3 fw-semiblod text-dark-emphasis">Stock :   {item.stock}</p>
                <div className="d-flex  fs-3 flex-row justify-content-evenly">
                <button className="w-25  fs-1 btn btn-outline-secondary border border-2 border-danger-subtle rounded bg-danger bg-opacity-25" onClick={restar}>-</button>
                <button className="w-50 border border-2 border-danger-subtle rounded"><span>{cont}</span></button>
                <button className="w-25  fs-1 btn btn-outline-secondary border border-2 border-danger-subtle rounded bg-danger bg-opacity-25 " onClick={sumar}>+</button>
            </div>
            <div>
                <button className=" btn btn-outline-light fs-4 w-100 fw-bolder text-danger-emphasis border border-2 border-danger-subtle rounded" onClick={agregarCarrito}>Agregar al Carrito</button>
            </div>
            </div>
            <Link  className=" col-1 " to={'/'}>
                <button className=" rounded-5 fs-2  mt-2 btn btn-outline-danger  border-opacity-25 p-2 bg-danger bg-opacity-25  fw-semibold">X</button>
            </Link>
          
        </div>
    </div>
            
            )}




import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CarritoContext";
import { ItemList } from "./ItemList";


export const Carrito = () =>{
    const {carrito , precioTotal , vaciarCarrito} = useCarritoContext()


    return(
        <>
        {
            carrito.length === 0?
            <>
            <div className=" grid bg-danger-subtle vh-100 vw-max">
            <div className=" bg-danger bg-opacity-10 h-100 d-flex flex-column algin-items-evelny justify-content-center ">
            <h1 className="text-center h-25 fs-1 fw-bolder  " >EL CARRITO ESTA VACIO</h1>
            <Link className="nav-link  h-25 bg-danger bg-opacity-25" to={'/'}>
            <button className="text-center fs-2 border border-danger  border-opacity-50 w-100 h-100 bg-danger bg-opacity-25 ">
                
                    Volver al Inicio
                
            </button>
            </Link>
            
            


            </div>
            </div>
           
            </>
            :
            
               <div className="d-flex grid flex-row bg-danger-subtle vh-max vw-max">
                <div className="grid col-8   ">
                {<ItemList products={carrito} plantilla="ItemCarrito" />}
                </div>
                   <div className="col-4 p-3" >
                   <div className="   d-flex flex-column border border-5 border-danger rounded border-opacity-25  bg-dark bg-opacity-25 justify-content-evenly algin-items-center">
                        <p className="text-center pt-3 fs-3 fw-semibold" >Resumen de la compra: $ {precioTotal()}</p>
                        <div className="d-flex flex-row pt-5 justify-content-evenly h-100">
                        <button className="h-50 fs-4 fw-bold bg-danger-subtle text-danger   border-3 border-danger border-opacity-75 rounded" onClick={vaciarCarrito}>
                            Vaciar Carrito
                        </button>
                        <button className="h-50 fs-5 p-1 text-warning fw-semibold rounded bg-warning bg-opacity-10 border-3 border-warning border-opacity-50" >
                            <Link className="nav-link" to={'/'}>
                                Continuar Comprando
                            </Link>
                        </button>
                        <button className="h-50 fs-5 p-1 fw-semibold text-success btn btn-outline-success rounded border-3 border-success border-opacity-50" >
                            <Link className="nav-link" to={'/checkout'}>
                                Finalizar compra
                            </Link>
                        </button>
                        </div>
                    </div>


                   </div>
                    
                </div>
            








        }
    </>
    )
}
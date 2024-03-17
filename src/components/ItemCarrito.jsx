import { useCarritoContext } from "../context/CarritoContext"
import { useContador } from '../hooks/useContador'

export const ItemCarrito = ({ product }) => {
    const { eliminarItem, actualizarItem } = useCarritoContext()
    const { cont, sumar , restar } = useContador(product.stock , product.quantity , 1)


    return (
        <>
     <div className="p-4 col-12">
            <div className=" row d-flex flex-row border border-5 border-danger border-opacity-10 rounded p-2 bg-dark bg-opacity-25 ">
                <div className="col-4   ">
                <img className=" p-4 " src={`${product.img}`}  alt="" />
                </div>
                <div className="col-6  d-flex flex-column justify-content-center algin-items-center" >
                    <h1 className="fs-1 p-2 fw-semibold text-center  ">{product.nombre}</h1>
                    <div className="d-flex text-light fs-4 text-center border border-3 border-danger border-opacity-10 rounded p-2 bg-danger bg-opacity-10  pt-2 flex-row  justify-content-around ">
                <button className="fs-2  border-danger border-opacity-10 rounded p-2 bg-light bg-opacity-25" onClick={async () => {
                    actualizarItem(product.id, cont - 1)
                    restar()
                }}>
                    -
                </button  >
                <span className="fs-2 w-50 rounded p-2 bg-light bg-opacity-25">cantidad: {cont}</span>
                <button className="fs-2  border-danger border-opacity-10 rounded p-2 bg-light bg-opacity-25" onClick={() => {
                    actualizarItem(product.id, cont + 1)
                    sumar()
                }}>
                    +
                </button>
                </div>
                <div className="pt-5">
                <p className="fs-4 text-center border border-3 border-light border-opacity-50 rounded  p-2 bg-light bg-opacity-25 text-lg font-semibold">Subtotal:${product.precio * cont}</p>
                </div>
                
            </div>
            <div className="col-1 ">
                    <button className="border border-3 border-danger btn btn-outline-danger  border-opacity-25 rounded p-2 bg-danger bg-opacity-25 fs-5 fw-semibold" onClick={()=>eliminarItem(product.id)}>
                        Eliminar
                    </button>
                </div>
               
            </div>
            




        </div>
        
        
        
        
        
        
        
        </>









    )
}
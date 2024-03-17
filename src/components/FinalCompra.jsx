import { useRef } from "react"
import { useCarritoContext } from "../context/CarritoContext"
import { Link,useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { actualizarProducto, crearOrdenCompra , obtenerProducto} from "../firebase/firebase.js"

export const FinalCompra = () => {
    const estadoForm = useRef ()
    const navegacion = useNavigate ()
    const {carrito , precioTotal , vaciarCarrito}= useCarritoContext()

    const clickSumb = (e) =>{
        e.preventDefault()
        const datFrom = new FormData(estadoForm.current)
        const cliente = Object.fromEntries (datFrom)


        const aux =[...carrito]

        aux.forEach(prodCarrito =>{
            obtenerProducto(prodCarrito.id).then(prodBDD =>{
                if(prodBDD.stock>= prodCarrito.quantity){
                    prodBDD.stock-=prodCarrito.quantity
                    actualizarProducto(prodBDD.id,prodBDD)
                }else{
                    aux.filter(prod=> prod.id != prodBDD.id)
                }
            })
        })

        const aux2 = aux.map(prod=>({id:prod.id , quantity: prod.quantity , precio: prod.precio}))

        crearOrdenCompra(cliente , precioTotal() , aux2 ,new Date().toLocaleDateString('es-AR',{timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra=>{
                toast.success(`🛒 Muchas gracias por comprar con nosotros, su ID de compra es: ${ordenCompra.id} por un total de $${precioTotal()}. En breve nos contactaremos para realizar envio`, {
                    position: "top-right",
                    autoClose: 6000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                
            })
            vaciarCarrito()
            e.target.reset()
            navegacion('/')


       
    })
    
    }






    return (
        <>
        {
            carrito.length === 0 ?
        <>
        
        
        <div className=" grid bg-danger-subtle vh-100 vw-max">
                <div className=" bg-danger bg-opacity-10 h-100 d-flex flex-column algin-items-evelny justify-content-center ">
                <h1 className="text-center h-25 fs-1 fw-bolder  " >AGREGAR PRODUCTOS AL CARRITO PARA FINALIZAR COMPRA</h1>
                <Link className="nav-link  h-25 bg-danger bg-opacity-25" to={'/'}>
                <button className="text-center fs-2 border border-danger  border-opacity-50 w-100 h-100 bg-danger bg-opacity-25 ">
                    
                        Volver al Inicio
                    
                </button>
                </Link>
                
                


                </div>
                </div>
        
        
        </>
        :
        <>
         <form action="" ref={estadoForm} onSubmit={clickSumb} >
            <div className=" d-flex justify-content-center  bg-danger-subtle vh-100">

                <div className="row  p-5 w-50 h-50 ">
                    <div className="col">
                        <label for="formGroupExampleInput" className=" fs-4 fw-bolder">Nombre:</label>
                        <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre" name="nombre"/>
                    </div>
                <div className="col">
                    <label for="formGroupExampleInput" className=" fs-4 fw-bolder">Apellido:</label>
                    <input type="text" className="form-control" placeholder="Apellido" aria-label="Apellido" name="apellido"/>
                </div>
            
                <label for="formGroupExampleInput" className=" fs-4 fw-bolder">DNI:</label>
                <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Dni" name="dni"/>
                <label for="formGroupExampleInput" className=" fs-4 fw-bolder">Telefono:</label>
                <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Telefono" name="telefono"/>
                <label for="formGroupExampleInput" className=" fs-4 fw-bolder">Email:</label>
                <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Email@" name="email"/>
                <label for="formGroupExampleInput" className=" fs-4 fw-bolder">Domicilio:</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Domicilio" name="domicilio"/>
                <button type="submit" className=" fs-4 fw-bolder mt-2 btn btn-outline-danger">Finalizar Compra</button>
            </div>  
        </div>

        </form>


        
        
        
        
        
        </>


            }
    

    </>



       
    
)}
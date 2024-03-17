import { useState , useContext , createContext } from "react";
import { toast } from "react-toastify";


const CarritoContext = createContext()

export const useCarritoContext= () => useContext(CarritoContext)

export  const ProveedorCarrito = (props) =>{

    const [carrito , setCarrito] = useState ([])


    const enCarrito = (id) =>{
        return carrito.some(prod => prod.id === id )
    }


    const agregarItem = (item , cantidad ) =>{

        if(enCarrito(item.id)){
            const indice = carrito.findIndex(prod => prod.id === item.id)
            const aux = [...carrito]
            aux[indice].quantity = cantidad
            setCarrito(aux)
        }else{
            const nuevoItem = {
                ...item,
                quantity: cantidad  
            }

            setCarrito([...carrito, nuevoItem])
        }
    }


    const eliminarItem = (id) =>{
        setCarrito(carrito.filter(prod => prod.id !== id))
            toast.error('Producto Eliminado', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
        })
       
    }



    const vaciarCarrito = () =>{
        setCarrito([])
    }


    const cantidaProductos = () => {
        return carrito.reduce((acum,prod)=> acum += prod.quantity , 0)
    }


    const precioTotal = () => {
        return carrito.reduce((acum,prod) => acum += (prod.quantity * prod.precio),0)
    }
    
    const actualizarItem = (id, newQuantity) => {
        const indice = carrito.findIndex(prod => prod.id === id)
        const aux = carrito
        aux[indice].quantity = newQuantity
        setCarrito([...aux])
    }


    return (
        <CarritoContext.Provider value={{carrito , agregarItem , eliminarItem , vaciarCarrito , cantidaProductos , precioTotal,actualizarItem}}>
            {props.children}
        </CarritoContext.Provider>
    )


}


import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailsContainer } from './components/ItemDetailsContainer'
import { Footer } from './components/Footer'
import { Error } from './components/Error'
import { FinalCompra } from './components/FinalCompra'
import { ProveedorCarrito } from './context/CarritoContext'
import { Carrito } from './components/Carrito'
import { ToastContainer } from 'react-toastify'



export const App = () => {
  return (
    <BrowserRouter>
      <ProveedorCarrito>
      <Navbar/>
      <ToastContainer/>
      <Routes >
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:idc' element={<ItemListContainer />} />
        <Route path='/product/:idp' element={<ItemDetailsContainer />} />
        <Route path='/checkout' element={<FinalCompra />} />
        <Route path='/carrito' element={<Carrito/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
      </ProveedorCarrito>     
    </BrowserRouter>
  )
}




import { CarritoLogo } from "./CarritoLogo";
import { Categorias } from "./Categorias";


export const Navbar = () => {

    return (
      <>    
      
        <nav className="navbar navbar-expand-lg bg-danger bg-opacity-25 border-bottom border-5 border-danger border-opacity-50 " >
            <div className="container-fluid">
                    
                    <img src="https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-barboza.appspot.com/o/logo-nana-eli.png?alt=media&token=dd636ded-d186-484f-9bd4-15822d669333" alt="" width={200} height={140} />
                    
                <div className="collapse navbar-collapse  " id="navbarNav">
                    <ul className="navbar-nav justify-content-evenly ">
                    <Categorias/>
                    </ul>
                </div>
            </div>
            
                <CarritoLogo/>
            
        </nav>
           
      </>
    );
}
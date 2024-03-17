import { Link } from "react-router-dom"
export const Item = ({product}) => {

    return (
            
            <div className="col p-3" >
            <div className="card justify-content-center bg-dark bg-opacity-25 " >
                <img className="card-img-top p-1 " src={`${product.img}`} alt= {`Imagen de ${product.nombre}`} />
                <div className="card-body">
                <h3 className="card-title text-center">{product.nombre}</h3>
                <div className="d-flex justify-content-around align-items-center ">
                    <h5 className="card-text text-center">PRECIO: ${product.precio}</h5> <br />
                    <Link to={`/product/${product.id}`}>
                    <button className="btn  bg-danger-subtle">VER PRODUCTO</button>
                    </Link>
                </div>
                </div>
            </div>
            </div>
        
            


            



    )


}
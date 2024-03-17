import { Link } from "react-router-dom";



export const Categorias = () => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link active fs-4"  to={'/'}>
          Inicio
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active fs-4"  to={'/categoria/cristal'}>
          Cristales
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active fs-4"  to={'/categoria/sahumerio'}>
          Sahumerios
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active fs-4"  to={'/categoria/spray'}>
          Aromaterapia
        </Link>
      </li>
    </>
  );
};

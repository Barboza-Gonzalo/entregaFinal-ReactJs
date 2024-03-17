import { useState } from "react";


export const useContador = (valorMax=1 , valorMin=0 , paso=1) => {

const [cont , setCont] = useState (valorMin)


const restar = () =>{
    if( cont - paso >= 1){
        setCont(cont - paso)
    }
}

const sumar = () =>{
    if(cont + paso <= valorMax){
    setCont( cont + paso)
}
}


return {cont , restar , sumar}

}


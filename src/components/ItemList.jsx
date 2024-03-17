import { Item } from "./Item";
import { ItemCarrito } from "./ItemCarrito";


export const ItemList = ({products, plantilla}) =>{
    return(
        <>
            {   
                plantilla === 'Item'
                ?
                products.map(prod => <Item key={prod.id} product={prod}/>)
                :
                products.map(prod => <ItemCarrito key={prod.id} product={prod}/>)
            
            }

        </>
    )
}
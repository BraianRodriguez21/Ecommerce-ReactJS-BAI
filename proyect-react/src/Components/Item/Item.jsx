 export default function Item (product){
    return(
        <div>
            <img src={product.imagen}alt="" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h1>{product.price}</h1>
            <p>{product.stock}</p>    
        </div>
    )
 }

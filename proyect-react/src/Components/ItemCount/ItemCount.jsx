import { useState, useContext } from "react"
import CartContext from "../CartContext/CartContext";


    const ItemCount = ({ stock =0, initial = 1}) =>{
    const [count, setCount] = useState (initial)
    const [stockReal, setStockReal] = useState(stock); 
     const{cart, setCart} = useContext(CartContext);  

    const increment = () =>{
        if(count < stock){
            setCount(prev => prev + 1)
        }
    }

    const decrement = () =>{
        if(count >1 ){
            setCount(prev => prev -1)
        }
    }
  
    
     const addToCart = () => {
      descontarStock(count)
      setCart ((currItems) => {
        console.log(currItems,"soldier gay")
        const isItemFound =  currItems.find((item) => item.id === id); 
        console.log("HOla",isItemFound)
        if (isItemFound) {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + count, price, img};
            } else {
              return item;
            }
          });
        } else {
          return [...currItems, { id, quantity: count, price, name, img }];
        }
      });
  
    }; 

    const descontarStock = (quantity) => {
      setStockReal(stockReal - quantity)
    }
  return (
    <div>

        <div className="item-count">
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={addToCart()} >Agregar al Carrito</button>
        </div>
        
    </div>
  )
}

export default ItemCount 



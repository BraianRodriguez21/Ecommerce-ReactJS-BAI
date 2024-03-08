import { createContext, useState } from "react";


export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const total = () => {
        let total = 0;
        cart.forEach(prod => {
          total = total + prod.price * prod.quantity
        })
        return total;
      }

    const removeAll = () => {
        setCart([]);
    }



    return (
        <CartContext.Provider value={{ cart, setCart, removeAll, total}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
export const CartContext = createContext();
const { Provider } = CartContext;
export const ShoppingCartProvider = ({ children }) => {
    const [cart,setCart] = useState([])
    const isItemFound =  cart.find((items) => items.id === items.id); 
   const  addToCart = ()=>{

      if (isItemFound) {
        return cart.map((i) => {
          if (i.id === item.id) {
            setCart([...cart,{...item,quantity: item.quantity +1}])
          } 
        });
      } else {
        setCart([...cart, { items }])
      }

    }
 

    const valorDelContexto = {
      addToCart
    }
    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )

}



export default ShoppingCartProvider;
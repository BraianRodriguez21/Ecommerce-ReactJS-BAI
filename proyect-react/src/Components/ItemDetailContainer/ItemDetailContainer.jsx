
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState();
  const { productId } = useParams();

  useEffect(() => {

    const fetchProductData = async () => {
      try {
       
        const data = await fetchData(productId);
        setProducto(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [productId]);

  if (!producto) {
   
    return <p>Cargando...</p>;
  }

  return (
    <main className="item-detail">
      <h1 style={{ textTransform: "capitalize" }}>{producto.name}</h1>
      <section style={{ display: "flex" }}>
        <section className="productos-info">
          <p>Description: {producto.description}</p>
          <p>Stock: {producto.stock}</p>
          <p>Price: {producto.price}</p>
          <p>Category: {producto.category}</p>
        </section>
      </section>
    </main>
  );
}

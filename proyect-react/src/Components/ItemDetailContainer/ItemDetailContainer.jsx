/* import { useState, useEffect } from "react";
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
        <section className="producto-info">
          <p>Description: {producto.description}</p>
          <p>Stock: {producto.stock}</p>
          <p>Price: {producto.price}</p>
          <p>Category: {producto.category}</p>
        </section>
      </section>
    </main>
  );
}
 */

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductosJson from "../Product/Productos.json";
import ItemDetail from "../ItemDetail/ItemDetail";


export default function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { productId } = useParams();

  function buscaId(productId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const producto = ProductosJson.find((producto) => producto.id === productId);
        if (producto) {
          resolve(producto);
        } else {
          reject("El producto que buscas ya no está disponible");
        }
      }, 2000);
    });
  }

  useEffect(() => {
    buscaId(productId)
      .then((res) => setProducto(res))
      .catch((messageNF) => {
        console.log(messageNF);
      })
  }, [productId]);


  return (

    <ItemDetail ProductoSeleccionado= {producto}/>

  );

}

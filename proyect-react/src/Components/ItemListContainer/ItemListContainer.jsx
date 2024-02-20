import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import ProductosJson from "../Product/Productos.json";
import ItemList from "../ItemList/Itemlist";

function asyncMock(categoryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryId === undefined) {
        resolve(ProductosJson);
      } else {
        const productosFiltrados = ProductosJson.filter((item) => {
          return item.categoria === categoryId;
        });

        if (productosFiltrados.length === 0) {
          reject("No se encontraron resultados");
        }

        resolve(productosFiltrados);
      }
    }, 2000);
  });
}

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    asyncMock(categoryId)
      .then((res) => setProductos(res))
      .catch((mensaje) => {
        console.log(mensaje);
      });
  }, [categoryId]);

  return (
    <main>
      <section className="item-list-container">
        <ItemList products={productos} />
      </section>
    </main>
  );
}

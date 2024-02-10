import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import productosJson from "../productos.json";
import ItemList from "../ItemList/Itemlist";

function asyncMock(categoryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(categoryId === undefined) {
        resolve(productosJson);
      }else {
        const productosFiltrados = productosJson.filter((item) => {
          return item.categoria === categoryId
        })

        if(productosFiltrados.lenght === 0){
          reject("No se encontraron resultados")
        }

        resolve(productosFiltrados)
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
      <ItemList products={productos}/>
      </section>
    </main>
  );
}
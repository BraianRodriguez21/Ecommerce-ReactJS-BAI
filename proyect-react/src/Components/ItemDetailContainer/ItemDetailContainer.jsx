import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productoRef = doc(db, "productos", productId);

    const fetchData = async () => {
      try {
        const productoDoc = await getDoc(productoRef);

        if (productoDoc.exists()) {
          setProducto({ id: productId, ...productoDoc.data() });
        } else {
          console.log("El producto que buscas no está disponible");
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, [productId]);

  return (
    <ItemDetail ProductoSeleccionado={producto} />
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Item product={product} />
          <Link to={`/product/${product.id}`}>
            <button>Ver Detalles </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

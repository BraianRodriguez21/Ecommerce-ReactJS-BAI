// import React from 'react';
// import Item from "../Item/Item";

// const ItemList = ({ products }) => {
//   return (
//     <div>
//       {products.map((product) => (
//         <Item key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default ItemList;

// ItemList.jsx

import React from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Item product={product} />
          {/* Agrega un botón "Ver Detalles" con un enlace hacia la página de detalles */}
          <Link to={`/product/${product.id}`}>
            <button>Ver Detalles</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

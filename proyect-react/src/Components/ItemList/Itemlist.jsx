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

import { Link } from "react-router-dom";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Item product={product} />

        </div>
      ))}
    </div>
  );
};

export default ItemList;

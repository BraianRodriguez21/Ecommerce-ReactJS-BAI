// import React from "react";
// import productos from "../Product/Productos.json";

// export default function Cart() {
//   return (
//     <section>
//       <div>
//         {productos.map((product) => (
//           <div key={product.id}>
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import productos from "../Product/Productos.json";

export default function Cart() {
  return (
    <section>
      <div>
        {productos.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
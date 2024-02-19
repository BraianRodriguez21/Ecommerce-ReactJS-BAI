import React from "react";
import productos from "../Product/Productos.json";

export default function Cart() {
  return (
    <section>
      <div>
        {productos.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

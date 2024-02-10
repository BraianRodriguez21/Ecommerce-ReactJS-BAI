import React from "react";

import productos from "../productos.json"

export default function Cart(){
    return (
        <section>
            <div>
                {productos.map((productos) =>(
                  <div>
                    <h2>{productos.name}</h2>  
                    <p>{productos.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )

}
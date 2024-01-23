import './App.css';
import { Product } from './Product';
import NavBar from './Components/NavBar/NavBar';
import React from 'react';
import IItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <IItemListContainer greeting='Bienvenidos a Baires Instruments' />

      <Product
        img='https://http2.mlstatic.com/D_NQ_NP_739195-MLA46818597679_072021-O.webp'
        title='Guitarra Electrica'
        description='Guitarra Epiphone SG de 2 pastillas humbucker'
        precio='400.000'
      />

      <Product
        img='https://www.pianos.rocks/cdn/shop/products/41xdtGJBfmL_grande.jpg?v=1658805592'
        title='Piano'
        description='Piano Yamaha'
        precio='700.000'
      />

      <Product
        img='https://acdn.mitiendanube.com/stores/152/693/products/base-productos_0000_2006260116045021_01_medium1-6de901621c0d807f3c16522951385092-640-0.jpg'
        title='Bajo'
        description='Bajo Ibanez GSR200 de 4 cuerdas'
        precio='550.000'
      />

      <Product
        img='https://http2.mlstatic.com/D_NQ_NP_914794-MLA54202754499_032023-O.webp'
        title='Guitarra Electrica'
        description='Fender Telecaster de 2 Pastillas Single Coil modificadas'
        precio='800.000'
      />
    </div>
  );
}

export default App;


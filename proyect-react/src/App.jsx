import './App.css';
import NavBar from './Components/NavBar/NavBar';
import React from 'react';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



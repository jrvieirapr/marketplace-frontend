import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Tipo from './components/tipo/Tipo';

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}/>
      <Route path="/tipos" element={<Tipo/>} />
    </Routes>
  );
};
export default Rotas;
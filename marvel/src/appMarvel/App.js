import React from 'react';
import './App.css'
import { Encabezado } from './Componentes/encabezado';
import { Rutas } from './Componentes/rutas';

export const App = () => {
  return (
    <>
      <Encabezado/>     
      <Rutas/>
    </>
  )
}

export default App;
import React from 'react';
import './Header.css';

const Header = ({ setFiltro }) => (
  <header>
    <h1>Lista de Tareas</h1>
    <select onChange={(e) => setFiltro(e.target.value)}>
      <option value="todas">Todas</option>
      <option value="completadas">Completadas</option>
      <option value="no-completadas">No Completadas</option>
    </select>
  </header>
);

export default Header;
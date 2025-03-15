import React from 'react';
import './FormularioTareas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const FormularioTareas = ({ nuevaTarea, setNuevaTarea, agregarTarea }) => (
  <form onSubmit={(e) => { e.preventDefault(); agregarTarea(); }}>
    <input
      type="text"
      value={nuevaTarea}
      onChange={(e) => setNuevaTarea(e.target.value)}
      placeholder="Escribe una tarea"
    />
    <button type="submit"><FontAwesomeIcon icon={faPlus} /></button>
  </form>
);

export default FormularioTareas;
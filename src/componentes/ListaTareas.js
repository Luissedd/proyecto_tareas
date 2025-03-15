import React from 'react';
import Tarea from './Tarea';
import './ListaTareas.css';

const ListaTareas = ({ tareas, editarTarea, eliminarTarea, toggleCompletada }) => (
  <div className="lista-tareas">
    {tareas.map(tarea => (
      <Tarea
        key={tarea.id}
        tarea={tarea}
        editarTarea={editarTarea}
        eliminarTarea={eliminarTarea}
        toggleCompletada={toggleCompletada}
      />
    ))}
  </div>
);

export default ListaTareas;
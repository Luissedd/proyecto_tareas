import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import './Tarea.css';

const Tarea = ({ tarea, editarTarea, eliminarTarea, toggleCompletada }) => {
  const [editando, setEditando] = useState(false);
  const [textoEditado, setTextoEditado] = useState(tarea.texto);

  const guardarEdicion = () => {
    editarTarea(tarea.id, textoEditado);
    setEditando(false);
  };

  return (
    <div className={`tarea ${tarea.completada ? 'completada' : ''}`}>
      {editando ? (
        <input
          type="text"
          value={textoEditado}
          onChange={(e) => setTextoEditado(e.target.value)}
          onBlur={guardarEdicion}
          autoFocus
        />
      ) : (
        <span onClick={() => toggleCompletada(tarea.id)}>{tarea.texto}</span>
      )}
      <div className="acciones">
        <button onClick={() => setEditando(!editando)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={() => eliminarTarea(tarea.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default Tarea;
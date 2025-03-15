import React, { useState } from 'react';
import Header from './Header';
import FormularioTareas from './FormularioTareas';
import ListaTareas from './ListaTareas';
import './App.css';

const App = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [filtro, setFiltro] = useState('todas');

  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return;
    setTareas([...tareas, { id: Date.now(), texto: nuevaTarea, completada: false }]);
    setNuevaTarea('');
  };

  const editarTarea = (id, nuevoTexto) => {
    setTareas(tareas.map(tarea => tarea.id === id ? { ...tarea, texto: nuevoTexto } : tarea));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const toggleCompletada = (id) => {
    setTareas(tareas.map(tarea => tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea));
  };

  const tareasFiltradas = tareas.filter(tarea => {
    if (filtro === 'completadas') return tarea.completada;
    if (filtro === 'no-completadas') return !tarea.completada;
    return true;
  });

  return (
    <div className="app">
      <Header setFiltro={setFiltro} />
      <FormularioTareas nuevaTarea={nuevaTarea} setNuevaTarea={setNuevaTarea} agregarTarea={agregarTarea} />
      <ListaTareas
        tareas={tareasFiltradas}
        editarTarea={editarTarea}
        eliminarTarea={eliminarTarea}
        toggleCompletada={toggleCompletada}
      />
    </div>
  );
};

export default App;
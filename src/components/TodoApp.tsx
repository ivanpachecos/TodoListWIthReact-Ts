import { useState } from "react";
import { ListaTareas } from "./ListaTarea";

export const TodoApp = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const [listaTarea, setListaTarea] = useState<string[]>([]);

  const handleAddTask = (
  ) => {
    if (nuevaTarea.trim() === '') return
    setListaTarea(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
    setNuevaTarea('')
  };

  const handleBorrarTarea = (index: number) => {
    setListaTarea(tareas => tareas.filter((_, i) => i !== index))
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Neva tarea"
        />
      </div>
      <button onClick={handleAddTask}>Agregar Tarea</button>
      <ListaTareas
        listaTarea={listaTarea}
        borrarTarea={handleBorrarTarea}
      ></ListaTareas>
    </div>
  );
};

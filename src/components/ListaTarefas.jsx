import './index.css'
import React, { useState } from 'react';

export default function ToDoList(){
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTasks = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }}

  return(
    <div className='container'>
      <h2>📝Lista de Tarefas</h2>
      <div className='alignment'>
        <div className='addList'>
          <input
            type="text"
            placeholder='Nova tarefa'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button  onClick={addTasks}>Adicionar</button>
        </div>
        <ul>
          {tasks.map((t, index) => (
            <li key={index} >{t}</li>
          ))}
        </ul>
      </div>
    </div>
  )

}
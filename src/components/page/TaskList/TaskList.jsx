import React from 'react';
import { NavLink } from 'react-router-dom';
import tasks from '../../../data/tasks';
import './TaskList.css';

const TaskList = () => {
  return (
    <div className="task-container">
      <h1>📋 Liste des Tâches</h1>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id}>
            <NavLink to={`/tasks/${task.id}`} className="task-link">
              {task.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import tasks from '../../../data/tasks';

const TaskDetail = () => {
  const { id } = useParams();
  const task = tasks.find(t => t.id === id);

  return (
    <div className="container mt-5">
      {task ? (
        <>
          <h2 className="mb-3">{task.title}</h2>
          <p className="lead">{task.description}</p>
        </>
      ) : (
        <div className="alert alert-danger" role="alert">
          Tâche non trouvée.
        </div>
      )}
      <Link to="/" className="btn btn-outline-primary mt-3">← Retour à la liste</Link>
    </div>
  );
};

export default TaskDetail;

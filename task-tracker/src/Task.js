
import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  const { id, name, dateAdded, completed } = task;

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <h3>{name}</h3>
      <p>Date Added: {dateAdded}</p>
      <button onClick={() => onToggle(id)}>
        {completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Task;

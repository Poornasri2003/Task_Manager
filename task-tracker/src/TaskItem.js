import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div>
      <span>{task.name}</span>
      <span>{task.dateAdded}</span>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;

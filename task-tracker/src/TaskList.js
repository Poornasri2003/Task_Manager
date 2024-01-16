
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);

  return (
    <div className="task-list">
      <div className="completed-tasks">
        <h2>Completed Tasks</h2>
        {sortedTasks
          .filter((task) => task.completed)
          .map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
          ))}
      </div>
      <div className="not-completed-tasks">
        <h2>Not Completed Tasks</h2>
        {sortedTasks
          .filter((task) => !task.completed)
          .map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
          ))}
      </div>
    </div>
  );
};

export default TaskList;

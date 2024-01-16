
import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskTime, setTaskTime] = useState('');

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      const newTask = {
        id: new Date().getTime(),
        name: taskName,
        dateAdded: taskDate || new Date().toLocaleDateString(),
        timeAdded: taskTime || new Date().toLocaleTimeString(),
        completed: false,
      };
      onAdd(newTask);
      setTaskName('');
      setTaskDate('');
      setTaskTime('');
    }
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Enter task date"
        value={taskDate}
        onChange={(e) => setTaskDate(e.target.value)}
      />
      <input
        type="time"
        placeholder="Enter task time"
        value={taskTime}
        onChange={(e) => setTaskTime(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;

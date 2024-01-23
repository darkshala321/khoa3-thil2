import React from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TodoList = ({ tasks, onToggleTask }) => {
  const calculateDaysLeft = (dueDate) => {
    if (!dueDate) return '';
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
    return diffTime > 0 ? `${diffTime} days left` : 'Due date passed';
  };

  return (
    <div className="todo-list-container">
      {tasks.map((task, index) => (
        <div key={index} className={`todo-item-container ${task.done ? "done" : ""}`}>
          {task.done ? (
            <FaRegCheckCircle onClick={() => onToggleTask(index)} className="item-done-button" color="#9a9a9a" />
          ) : (
            <FaRegCircle onClick={() => onToggleTask(index)} className="item-done-button" color="#9a9a9a" />
          )}
          <div className="item-title">{task.title}</div>
          <div className="due-date">{calculateDaysLeft(task.dueDate)}</div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
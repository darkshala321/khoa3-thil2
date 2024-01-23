import "./styles.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import languages from "./languages";

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const switchLanguage = (lang) => {
    setCurrentLanguage(lang);
  };
  const [tasks, setTasks] = useState([]);
  const [showNotFinishedOnly, setShowNotFinishedOnly] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }

    const withDone = searchParams.get("withDone");
    setShowNotFinishedOnly(withDone !== '1');
  }, [searchParams]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleCheckboxChange = (e) => {
    setShowNotFinishedOnly(e.target.checked);
    setSearchParams({ withDone: e.target.checked ? '0' : '1' });
  };

  const addTask = (title, dueDate) => {
    setTasks([...tasks, { title, done: false, dueDate }]);
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  function Home() {
    const filteredTasks = showNotFinishedOnly ? tasks.filter(task => !task.done) : tasks;
    const undoneTasks = tasks.filter(task => !task.done).length;

    return (
      <div className="container">
        <TodoListHeader undoneTaskCount={undoneTasks} lang={currentLanguage} />

        <label>
          <input
            type="checkbox"
            checked={showNotFinishedOnly}
            onChange={handleCheckboxChange}
          />
          {languages[currentLanguage].notFinishedOnly}
        </label>
        <TodoList tasks={filteredTasks} onToggleTask={toggleTask} lang={currentLanguage} />
        <Form onAddTask={addTask} lang={currentLanguage} />
        <Footer switchLanguage={switchLanguage} lang={currentLanguage} />
      </div>
    );
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
import React, { useState } from "react";
import languages from "./languages";

const Form = ({ onAddTask, lang }) => {
  const [inputValue, setInputValue] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      onAddTask(inputValue, dueDate);
      setInputValue("");
      setDueDate("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder={languages[lang].inputPlaceholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">{languages[lang].submitButton}</button>
    </form>
  );
};

export default Form;
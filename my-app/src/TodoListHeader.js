import React from "react";

const TodoListHeader = ({ undoneTaskCount, lang }) => {
  if (lang === "vi") {
    return <div className="header">Bạn còn lại {undoneTaskCount} công việc chưa làm!</div>;
  } else {
    return <div className="header">You have {undoneTaskCount} tasks left!</div>;
  }
};

export default TodoListHeader;
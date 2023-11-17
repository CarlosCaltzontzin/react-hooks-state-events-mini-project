import React from "react";

function Task({text, category, onDelete}) {
  const handleDelete = () => {
    // Call the onDelete prop to handle the deletion of the task
    onDelete();
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;

import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[1]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new task object
    const newTask = {
      text: taskText,
      category: taskCategory,
    };
    // Call the onTaskFormSubmit prop to handle the addition of the new task
    onTaskFormSubmit(newTask);
    // Clear the form after submitting
    setTaskText("");
    setTaskCategory(categories[1]);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
        >
          {/* render <option> elements for each category here */}
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
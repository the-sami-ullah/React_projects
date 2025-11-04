import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Todo.css";
import { useState } from "react";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 



  const handleSubmit = (event) => {

    
    event.preventDefault();
    
    if (!inputValue.trim()) return;

    if (editIndex !== null) {
      // Editing existing task
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = inputValue.trim();
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // Adding new task
      if (tasks.includes(inputValue.trim())) return;
      setTasks((prev) => [...prev, inputValue.trim()]);
    }

    setInputValue("");
  };

  const handleDelete = (taskToDelete) => {
    setTasks((prev) => prev.filter((task) => task !== taskToDelete));
  };

  const handleEdit = (index) => {
    setInputValue(tasks[index]); // put the old value back into the input box
    setEditIndex(index); // remember which item we’re editing
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <p className="todo-date">{today}</p>
      </header>
      <section className="form">
        <Form onSubmit={handleSubmit}>
          <div className="input-section">
            <Form.Control
              type="text"
              placeholder="Add new task"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button type="submit" variant="primary" className="mt-2">
              Add Task
            </Button>
          </div>
        </Form>
      </section>

      <section className="list">
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="todo-item">
              <span>{task}</span>
              <div className="btn-group">
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => alert(`Task "${task}" completed!`)}
                >
                  Done
                </Button>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(task)}
                >
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

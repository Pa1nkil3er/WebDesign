import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [tasks, setTasks] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    Deadline: "",
    Priority: "",
    Tags: "",
    Description: "",
  });

  const [editFormData, setEditFormData] = useState({
    Name: "",
    Deadline: "",
    Priority: "",
    Tags: "",
    Description: "",
  });

  const [editTaskId, setEditTaskId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: nanoid(),
      Name: addFormData.Name,
      Deadline: addFormData.Deadline,
      Priority: addFormData.Priority,
      Tags: addFormData.Tags,
      Description: addFormData.Description,
    };

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedTask = {
      id: editTaskId,
      Name: editFormData.Name,
      Deadline: editFormData.Deadline,
      Priority: editFormData.Priority,
      Tags: editFormData.Tags,
      Description: editFormData.Description,
    };

    const newTasks = [...tasks];

    const index = tasks.findIndex((task) => task.id === editTaskId);

    newTasks[index] = editedTask;

    setTasks(newTasks);
    setEditTaskId(null);
  };

  const handleEditClick = (event, task) => {
    event.preventDefault();
    setEditTaskId(task.id);

    const formValues = {
      Name: task.Name,
      Deadline: task.Deadline,
      Priority: task.Priority,
      Tags: task.Tags,
      Description: task.Description,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditTaskId(null);
  };
  const handleDeleteClick = (contactId) => {
    const newTasks = [...tasks];

    const index = tasks.findIndex((task) => task.id === contactId);

    newTasks.splice(index, 1);

    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Deadline</th>
              <th>Priority</th>
              <th>Tags</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <Fragment>
                {editTaskId === task.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    task={task}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a task</h2>
      <form className="addInput" onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="Name"
          required="required"
          placeholder="Name:"
          onChange={handleAddFormChange}
        />
        <input
          type="date"
          name="Deadline"
          required="required"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Priority"
          required="required"
          placeholder="Priority:"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Tags"
          required="required"
          placeholder="Tags:"
          onChange={handleAddFormChange}
        />
        <input type="text"
          name="Description"
          required="required"
          placeholder="Description:"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;

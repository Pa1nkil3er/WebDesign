import React from "react";

const ReadOnlyRow = ({ task, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{task.Name}</td>
      <td>{task.Deadline}</td>
      <td>{task.Priority}</td>
      <td>{task.Tags}</td>
      <td>{task.Description}</td>
      <td><select>
        <option>Done</option>
        <option>WIP</option>
        <option selected>Not started</option>
      </select></td>
      <td>
        <button type="button" onClick={(event) => handleEditClick(event, task)}>Edit</button>
        <button type="button" onClick={() => handleDeleteClick(task.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;

import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick, index
}) => {
  return (
    <tr key={index}>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Name:"
          name="Name"
          value={editFormData.Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          name="address"
          value={editFormData.Deadline}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Priority"
          name="Priority"
          value={editFormData.Priority}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Tags:"
          name="Tags"
          value={editFormData.Tags}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Description:"
          name="Description"
          value={editFormData.Description}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;

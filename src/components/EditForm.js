import React, { useState } from 'react';
import './EditForm.css';

export default function EditForm({ user, onSubmit, onClose }) {
  // Initialize form state directly from the user prop
  const [formData, setFormData] = useState({
    name: user.name,
    address: user.address,
    image: user.image,
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the respective field based on input's name attribute
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    const updatedUser = { ...user, ...formData }; // Merge the original user data with updated form values
    onSubmit(updatedUser);
  };

  return (
    <div className="edit-form-container">
      <form onSubmit={handleSubmit} className="edit-form">
        <strong>ID: {user.idNumber}</strong>

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name} // Use formData for controlled input
          onChange={handleChange}
        />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address} // Use formData for controlled input
          onChange={handleChange}
        />

        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={formData.image} // Use formData for controlled input
          onChange={handleChange}
        />

        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

import React, { useState } from 'react';
import './EditForm.css';

export default function EditForm({ user, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    name: user.name,
    address: user.address,
    image: user.image,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    const updatedUser = { ...user, ...formData }; 
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
          value={formData.name} 
          onChange={handleChange}
        />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={formData.image} 
          onChange={handleChange}
        />

        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

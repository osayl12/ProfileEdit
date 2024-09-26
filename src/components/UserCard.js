import React from 'react';
import './UserCard.css';

export default function UserCard({ user, onClick }) {
  const userImage = require(`../images/${user.image}`); // Dynamic image loading
  
  return (
    <div className="user-card" onClick={onClick}>
      <img src={userImage} alt={user.name} className="user-image" />
      <div className="user-details">
        <p><strong>ID:</strong> {user.idNumber}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>
    </div>
  );
}

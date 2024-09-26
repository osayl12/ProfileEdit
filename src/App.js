import React, { useState } from 'react';
import UserCard from './components/UserCard';
import EditForm from './components/EditForm';
import './App.css';

const UsersObj = [
  {
    id: 1,
    name: 'Yossi Cohen',
    idNumber: '303456781',
    address: 'Tel Aviv',
    image: 'Yossi.jpg',
  },
  {
    id: 2,
    name: 'Dana Levi',
    idNumber: '208543123',
    address: 'Jerusalem',
    image: 'Dana.jpg',
  },
  {
    id: 3,
    name: 'Alex Cage',
    idNumber: '314567210',
    address: 'Haifa',
    image: 'Alex.jpeg',
  },
];

export default function App() {
  const [users, setUsers] = useState(UsersObj);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setSelectedUser(null);
  };

  return (
    <div className="app">
      <div className="user-cards">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onClick={() => setSelectedUser(user)} />
        ))}
      </div>
      {selectedUser && (
        <EditForm user={selectedUser} onSubmit={handleEdit} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}

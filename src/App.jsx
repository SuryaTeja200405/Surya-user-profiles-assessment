import React, { useState } from 'react';
import Header from './components/Header';
import UsersList from './components/UsersList';
import AddUserModal from './components/AddUserModal';
import ProfileOverview from './components/ProfileOverview';

const initialUsers = [
  { id: 1, name: 'Dave Richards', email: 'dave@mail.com' },
  { id: 2, name: 'Abhishek Nair', email: 'abhishek@mail.com' },
  { id: 3, name: 'Nikhita Gupta', email: 'nikhita@mail.com' }
];

export default function App() {
  const [view, setView] = useState('users'); // 'users' or 'profile'
  const [users, setUsers] = useState(initialUsers);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(initialUsers[0]);

  function addUser(user) {
    const next = { id: Date.now(), ...user };
    setUsers(prev => [...prev, next]);
  }

  function openProfile(user) {
    setSelectedUser(user);
    setView('profile');
  }

  return (
    <div className="app">
      <Header onNav={(v) => setView(v)} />
      <div className="main">
        {view === 'users' && (
          <UsersList
            users={users}
            onAdd={() => setShowAddModal(true)}
            onOpenProfile={openProfile}
          />
        )}

        {view === 'profile' && (
          <ProfileOverview user={selectedUser} onBack={() => setView('users')} />
        )}

        {showAddModal && (
          <AddUserModal
            onClose={() => setShowAddModal(false)}
            onAdd={(u) => {
              addUser(u);
              setShowAddModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
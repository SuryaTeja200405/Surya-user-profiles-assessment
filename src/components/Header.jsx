import React from 'react';

export default function Header({ onNav }) {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <div className="header-actions">
        <button title="Users" onClick={() => onNav('users')}>Users</button>
        <button title="Profile" onClick={() => onNav('profile')}>My Profile</button>
        <div className="avatar">U</div>
      </div>
    </header>
  );
}
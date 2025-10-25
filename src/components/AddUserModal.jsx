import React, { useState } from 'react';

export default function AddUserModal({ onClose, onAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function submit(e) {
    e.preventDefault();
    if (!name || !email) return;
    onAdd({ name, email });
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>Add User</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <form className="modal-body" onSubmit={submit}>
          <label>
            User name
            <input value={name} onChange={e => setName(e.target.value)} />
          </label>

          <label>
            Email
            <input value={email} onChange={e => setEmail(e.target.value)} />
          </label>

          <div className="modal-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit" className="primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
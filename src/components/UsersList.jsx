import React from 'react';

export default function UsersList({ users, onAdd, onOpenProfile }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Users</h2>
        <button className="primary" onClick={onAdd}>+ Add user</button>
      </div>

      <table className="users-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>User name</th>
            <th>E-mail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={u.id}>
              <td>{i + 1}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button onClick={() => onOpenProfile(u)}>Open</button>
                <button className="icon">•••</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
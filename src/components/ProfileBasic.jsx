import React from 'react';

export default function ProfileBasic({ user }) {
  return (
    <div className="card profile-card-form">
      <h3>Basic Details</h3>

      <div className="grid">
        <label>
          First name
          <input defaultValue={user.name.split(' ')[0]} />
        </label>
        <label>
          Last name
          <input defaultValue={user.name.split(' ')[1] || ''} />
        </label>
        <label>
          Email
          <input defaultValue={user.email} />
        </label>
        <label>
          Phone
          <input defaultValue="+91 8231234564" />
        </label>
      </div>
    </div>
  );
}
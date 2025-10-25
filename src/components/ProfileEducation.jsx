import React from 'react';

export default function ProfileEducation() {
  return (
    <div className="card profile-card-form">
      <h3>Education Details</h3>
      <div className="grid">
        <label>
          School/College
          <input placeholder="Enter college name" />
        </label>
        <label>
          Degree
          <input placeholder="e.g. B.Tech in Computer Science" />
        </label>
        <label style={{gridColumn: '1 / -1'}}>
          Skills & Projects
          <textarea placeholder="Add skills or project summaries" />
        </label>
      </div>
    </div>
  );
}
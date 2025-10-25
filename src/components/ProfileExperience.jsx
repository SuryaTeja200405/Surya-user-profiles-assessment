import React from 'react';

export default function ProfileExperience() {
  return (
    <div className="card profile-card-form">
      <h3>Work Experience</h3>

      <div className="grid">
        <label>
          Company
          <input placeholder="Company name" />
        </label>
        <label>
          Role
          <input placeholder="Job title" />
        </label>
        <label>
          Duration
          <input placeholder="e.g. Jan 2020 - Present" />
        </label>
        <label style={{gridColumn: '1 / -1'}}>
          Achievements / Responsibilities
          <textarea placeholder="Describe the work done" />
        </label>
      </div>

      <div className="row">
        <label>
          LinkedIn
          <input placeholder="linkedin.com/in/..." />
        </label>
        <label>
          Resume
          <input placeholder="Upload URL or file name" />
        </label>
      </div>
    </div>
  );
}
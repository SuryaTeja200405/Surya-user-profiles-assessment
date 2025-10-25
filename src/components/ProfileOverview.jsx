import React, { useState } from 'react';
import ProfileBasic from './ProfileBasic';
import ProfileEducation from './ProfileEducation';
import ProfileExperience from './ProfileExperience';

export default function ProfileOverview({ user, onBack }) {
  const [tab, setTab] = useState('basic');

  return (
    <div className="profile-page">
      <div className="profile-header">
        <button className="back" onClick={onBack}>← Back</button>
        <div className="profile-card">
          <div className="avatar-large">A</div>
          <div className="profile-meta">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>+91 8231234564</p>
          </div>
        </div>
      </div>

      <div className="tabs">
        <button className={tab === 'basic' ? 'active' : ''} onClick={() => setTab('basic')}>Basic details</button>
        <button className={tab === 'education' ? 'active' : ''} onClick={() => setTab('education')}>Education & Skills</button>
        <button className={tab === 'experience' ? 'active' : ''} onClick={() => setTab('experience')}>Experience</button>
      </div>

      <div className="tab-content">
        {tab === 'basic' && <ProfileBasic user={user} />}
        {tab === 'education' && <ProfileEducation user={user} />}
        {tab === 'experience' && <ProfileExperience user={user} />}
      </div>
    </div>
  );
}
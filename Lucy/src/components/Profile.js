// src/components/Profile.js
import React from 'react';
import AboutMe from '../About/AboutMe';

function Profile() {
  return (
    <div className="content">
      <section id="about" className="section">
        <AboutMe />
      </section>
      <section id="skills" className="section">
        <h2>Skills</h2>
        <p>Skills section content.</p>
      </section>
      <section id="experience" className="section">
        <h2>Experience</h2>
        <p>Experience section content.</p>
      </section>
    </div>
  );
}

export default Profile;

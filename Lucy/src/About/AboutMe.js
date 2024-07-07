// src/components/Profile.js
import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <header className="about">
      <div class="about-container">
        <div class="about-container-left">
          <div class="about-container-left-photo">
            <img src="./about_photo.jpg" />
          </div>
        </div>
        <div class="about-container-right">
          <div class="about-container-right-introduce">
            <h2>My Biography</h2>
            <h3>Hi, I'm Lucy, a software engineer. 2.6 years of experience in both algorithm and full-stack web development. Good at programming languages such as Python, Javascript, C++.
            Over the past 2.6 months, I've been dedicated to developing the company's "Automated Production Line Integration System". Primarily responsible for edge and web application developments. Currently, it's running smoothly in factories located in Suzhou, Chongqing and Vietnam.</h3>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AboutMe;

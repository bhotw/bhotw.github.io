

import React from 'react';

const AboutMe = () => {
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/md-s-sheik', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/bhotw', '_blank');
  };

  return (
    <div className="contact-me">
      <h2>About Me</h2>
      <p>
        Hello! I'm Md Sheik. This is a brief introduction about myself.
      </p>
      <div className="button-container">
        <button className="contact-button" onClick={openLinkedIn}>
          LinkedIn
        </button>
        <button className="contact-button" onClick={openGitHub}>
          GitHub
        </button>
      </div>
    </div>
  );
};

export default AboutMe;

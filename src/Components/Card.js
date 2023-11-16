
import React, { useState } from 'react';
import '../css/Card.css'; 

const Card = ({ title, githubLink }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
      <div className="header">
        <h3>{title}</h3>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
      {isExpanded && (
        <div className="details">
          {/* Add more details here */}
          Details about {title}
        </div>
      )}
    </div>
  );
};

export default Card;

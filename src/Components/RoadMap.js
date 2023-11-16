
import React from 'react';
import Card from './Card';
import '../css/RoadMap.css'; 

const RoadMap = () => {
  return (
    <main className="contact-content">
        <div className="roadman">
            <div className="vertical-road" />
            <div className="cards-container">
                <Card title="Project 1" githubLink="https://github.com/project1" />
                <Card title="Project 2" githubLink="https://github.com/project2" />
                <Card title="Project 2" githubLink="https://github.com/project2" />
                <Card title="Project 2" githubLink="https://github.com/project2" />
                <Card title="Project 2" githubLink="https://github.com/project2" />
                <Card title="Project 2" githubLink="https://github.com/project2" />
                <Card title="Project 2" githubLink="https://github.com/project2" />
                <Card title="Project 2" githubLink="https://github.com/project2" />
                <Card title="Project 2" githubLink="https://github.com/project2" />
            </div>
        </div>
    </main>
  );
};

export default RoadMap;

import React from 'react';
import "./skills-info.css"

const SkillsInfo = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>
      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skill-info">
              <p>{item.skills}</p>
              <p className="percentage">{item.percentage}</p>
            </div>
            <div className="skills-progress-bg">
              <div
                className="skills-progress"
                style={{ width: item.percentage }}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfo;

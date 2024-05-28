import React, { useState } from 'react'
import "./skills.css"
import { SKILLS } from '../../utils/data'
import SkillsCard from './skillsCard/SkillsCard'
import SkillsInfo from './skillsinfo/SkillsInfo'

const Skills = () => {

  const [selectedSkills, setSelectedSkills] = useState(SKILLS[0]);

  const handleSelectedSkills = (data) => {
    setSelectedSkills(data);
  };

  return (
    <section className='skills-container'>
        <h5>My Skills</h5>

        <div className="skills-content">
            <div className="skills">
                {SKILLS.map((item) => (
                    <SkillsCard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkills.title === item.title }
                    onClick={()=> {
                      handleSelectedSkills(item)
                    }}
                    />
                ))}
            </div>
            <div className="skills-info">
              <SkillsInfo
              heading={selectedSkills.title}
              skills={selectedSkills.skills}
              />
            </div>
        </div>
    </section>
  )
}

export default Skills
import React from 'react';
import * as CS from '../../styles/style'; // CS - COMMON STYLES
import Title from '../Title';

const Skills = () => {
  return (
    <CS.SectionWrapper>
      <CS.Section>
        <CS.W100>
          <CS.MW700PX>
            <Title title="My Skills" />
            <p>
              Through my studies, I've gained a solid understanding of computer science and web development concepts, and have dedicated a lot of my free time
              to apply these concepts to real-world scenarios and application.
            </p>
          </CS.MW700PX>

          <CS.SkillsTable>
            <div>
              <CS.Skill>
                <span> o </span>
                Javascript
              </CS.Skill>

              <CS.Skill>
                <span> o </span>
                Styled Components
              </CS.Skill>
            </div>

            <div>
              <CS.Skill>
                <span> o </span>
                React Js
              </CS.Skill>

              <CS.Skill>
                <span> o </span>
                Redux
              </CS.Skill>
            </div>

            <div>
              <CS.Skill>
                <span> o </span>
                Node JS
              </CS.Skill>

              <CS.Skill>
                <span> o </span>
                Express JS
              </CS.Skill>
            </div>

            <div>
              <CS.Skill>
                <span> o </span>
                MongoDB
              </CS.Skill>

              <CS.Skill>
                <span> o </span>
                GIT
              </CS.Skill>
            </div>
          </CS.SkillsTable>
        </CS.W100>
      </CS.Section>
    </CS.SectionWrapper>
  );
};

export default Skills;

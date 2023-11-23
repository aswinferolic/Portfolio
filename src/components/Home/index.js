import React from 'react';
import * as CS from '../../styles/style';
import Title from '../Title';

const Home = () => {
  return (
    <>
      <CS.Logo></CS.Logo>
      <CS.SectionWrapper>
        <CS.Section>
          <CS.W100>
            <Title title="Hi There, I'm Ferolic." />
            <p>
              I'm Aswin Ferolic, a passionate <strong>Javascript Developer</strong> with a strong foundation in software engineering. In my role as a{' '}
              <strong>Software Development Trainee</strong> at CONTUS TECH, I had the opportunity to collaborate with a dynamic team of developers. Together, we
              designed, developed, and maintained scalable and efficient backend systems using Node.js. My responsibilities included implementing RESTful APIs
              for various functionalities, ensuring seamless communication between the frontend and backend. I played a key role in optimizing database queries,
              ensuring data integrity, and ultimately contributing to improved system performance. Throughout this experience, I leveraged tools such as Jira,
              Bitbucket, and Git to streamline our development processes.
            </p>

            <p>
              During my time as a <strong>Backend Developer Intern</strong> at DOODLEBLUE INNOVATIONS, I delved into the world of Node.js and Express. In this
              role, I developed and maintained multiple microservices, encompassing REST APIs written in Node.js. Working closely with the backend team, I
              ensured strict adherence to backend code standards. Additionally, I honed my skills in effective data modeling, creating well-structured and
              optimized MongoDB schemas. My journey also involved learning Node.js best practices, emphasizing efficient programming and the construction of
              high-performance applications through modular code organization and optimization techniques. These experiences have not only shaped my technical
              expertise but have also instilled in me a passion for collaborative and innovative software development.
            </p>
          </CS.W100>
        </CS.Section>
      </CS.SectionWrapper>
    </>
  );
};

export default Home;

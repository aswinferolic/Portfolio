import React from 'react';
import styled from 'styled-components';
import * as CS from '../../styles/style';
import Title from '../Title';

const MovieDBImg = styled.div`
  background-image: url('./images/cinemadb.png');
  width: 100%;
  height: 400px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media ${(props) => props?.theme?.mediaQueries?.large} {
    height: 800px;
  }
`;

const Projects = () => {
  return (
    <>
      <CS.SectionWrapper>
        <CS.Section>
          <CS.W100>
            <CS.MW700PX>
              <Title title="The Cinema DB" />
              <p>
                Developed a Movie API web application using <strong>React Js</strong> and <strong> Redux </strong>, enabling users to browse, search, and
                interact with movie data seamlessly.
                <br />I have implemented state management with Redux, maintaining a centralized store for efficient data flow and application scalability.
                <br />
                <a target="_blank" rel="noopener noreferrer" href="https://aswinferolic.github.io/cinema" style={{padding: 0, textDecoration: 'underline'}}>
                  <strong> View </strong>
                </a>
              </p>
            </CS.MW700PX>
            <a href="https://aswinferolic.github.io/cinema" target="_blank" rel="noopener noreferrer">
              <MovieDBImg></MovieDBImg>
            </a>
          </CS.W100>
        </CS.Section>
      </CS.SectionWrapper>
    </>
  );
};

export default Projects;

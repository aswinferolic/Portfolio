import React from 'react';
import styled from 'styled-components';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import * as CS from './styles/style';

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 20px;
  margin: 25px auto 0 auto;
  opacity: 0;
  animation: 0.6s ease-in-out 2s 1 normal forwards running animateText;
  background-color: white;

  @media ${(props) => props?.theme?.mediaQueries?.large} {
    max-width: 940px;
    margin: 75px auto 0 auto;
  }

  @media ${(props) => props?.theme?.mediaQueries?.larger} {
    max-width: 1200px;
    margin: 75px auto 0 auto;
  }

  @keyframes animateText {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Footer = styled.div`
  margin: 20px 0px 0px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-wrap: nowrap;
    margin: 100px 0 0;
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Home />
      <Skills />
      <Projects />
      <Footer>
        <CS.Logo></CS.Logo>
        <div>
          <a href="https://github.com/aswinferolic" target="_blank" rel="noopener noreferrer">
            github
          </a>
          <a href="https://www.linkedin.com/in/ferolic/" className="social-link" target="_blank" rel="noopener noreferrer">
            linkedIn
          </a>
          <a href="mailto:ferolic96@gmail.com">ferolicdev@gmail.com</a>
        </div>
      </Footer>
    </Wrapper>
  );
};

export default App;

import React from 'react';
import styled from 'styled-components';
import Home from './components/Home';

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 20px;
  margin: 25px auto 0 auto;
  opacity: 0;
  animation: 0.6s ease-in-out 2s 1 normal forwards running animateText;
  background-color: white;

  @media ${(props) => props?.theme?.mediaQueries?.large} {
    max-width: 940px;
    margin: 75px auto;
  }

  @media ${(props) => props?.theme?.mediaQueries?.larger} {
    max-width: 1200px;
    margin: 75px auto;
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

const App = () => {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
};

export default App;

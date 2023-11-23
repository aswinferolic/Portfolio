import styled from 'styled-components';

export const SectionWrapper = styled.div`
  margin: 48px 0px 48px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-wrap: nowrap;
    margin: 100px 0px 200px;
  }
`;

export const Section = styled.div`
  margin: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-wrap: nowrap;
  }
`;

export const W100 = styled.div`
  width: 100%;
`;

export const MW700PX = styled.div`
  max-width: 700px;
`;

export const SkillsTable = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-wrap: nowrap;
  }
`;

export const Skill = styled.p`
  color: black;
  font-weight: 700;
  min-width: 200px;
  margin: 20px 0px 0px;
  font-size: 16px;
  line-height: 184.69%;
  letter-spacing: 0.03em;
  font-style: normal;

  & span {
    font-size: 20px;
    margin-right: 5px;
    color: rgb(180, 225, 231);
  }

  @media ${(props) => props.theme.mediaQueries.large} {
    min-width: unset;
    margin: 30px 0;
  }
`;

export const Logo = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-image: url('./images/icon.png');
  width: 54px;
  height: 60px;
  background-size: contain;
`;

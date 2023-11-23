import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin : 0;
        padding : 0;
        text-decoration: none;
    }

    *,
    *::after,
    *::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
    }

    html {
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
    }

    a {
        color : black;
        padding: 0 8px;
        font-weight: 500;
        cursor: pointer;
        font-size : 14px;

        @media ${(props) => props?.theme?.mediaQueries?.large} {
            font-size: 16px;
        }
    }

    a:hover {
        text-decoration: underline;
    }

    p {
        margin: 50px 0px;
        color: black;
        width: 100%;
        font-style: normal;
        font-weight: normal;
        font-size : 13.5px;
        line-height: 184.69%;
        letter-spacing: 0.03em;

        @media ${(props) => props?.theme?.mediaQueries?.large} {
            font-size: 16px;
        }
    }
`;

import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin : 0;
        padding : 0;
        text-decoration: none;
        border : none;
        outline: none;
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
    }
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body{
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 20px 40px;

        @media screen and (max-width: 800px) {
            padding: 5px;
        }
    }

    a{
        text-decoration: none;
        color: #1b1b1b;
    }
`;

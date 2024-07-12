import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: "Roboto", sans-serif;
    }

    button {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover {
        filter: brightness(0.9);
    }
`;
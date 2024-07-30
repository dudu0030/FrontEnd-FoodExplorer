import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS} from "./breakpoints";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 16px;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            font-size: 12px;
        }
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

    ::-webkit-scrollbar {
        width: 0.5rem;
    }

    ::-webkit-scrollbar-track {
        background-color: #000A0F;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #09090A;
    }
`;
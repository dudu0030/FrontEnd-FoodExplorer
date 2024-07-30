import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.MAIN_BACK};
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 104px auto;
    grid-template-areas: 
    "header"
    "content";

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        grid-template-columns: auto;
        grid-template-rows: auto 1fr;
    }

    > main {
        grid-area: content;
        overflow-y: auto;

        padding: 76px 123px;
        
    }
`;

export const Content = styled.div`
    > div {  /* JÁ QUE AS IMAAGENS NÃO ESTÃO FUNCIONANDO CORRETAMENTE, DECIDI CENTRALIZAR ESTÁ DIV NA PÁGINA (FICOU ATÉ MAIS BONITO HEHEHE) */
        width: 100%;
        height: 150px;
        margin-bottom: 76px;

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

        > h1 {
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            font-size: 40px;
            font-weight: 500;
            font-family: "Poppins", sans-serif;
        }

        > p {
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            font-size: 16px;
            font-weight: 400;
            font-family: "Roboto", sans-serif;
        }
    }

    > Section {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        
        margin: 20px auto;
        
        gap: 48px 60px;
    }
`;
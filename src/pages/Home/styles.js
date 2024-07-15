import styled from 'styled-components';

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.MAIN_BACK};
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 104px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: scroll;

        padding: 76px 123px;
        
    }
`;

export const Cards = styled.div`
    padding: 24px;
    display: grid;
    width: 304px;
    height: 462px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND};

    

    > svg {
        width: 24px;
        height: 24px;
        color: ${({ theme }) => theme.COLORS.LIGTH_400};
        margin-left: 90%;
    }

    > img {
        width: 176px;
        height: 176px;
        border: none;
        margin: 24px auto;
    }

    > h2 {
        margin: 24px auto 15px;
        color: ${({ theme }) => theme.COLORS.LIGTH_400};
        font-size: 24px;
        font-weight: 700;
        font-family: "Poppins", sans-serif;
    }

    > h3 {
        margin-left: 24px;
        margin-top: 15px;
        gap: 10px;
        color: ${({ theme }) => theme.COLORS.LIGTH_400};
        font-size: 14px;
        font-weight: 400;
        font-family: "Roboto", sans-serif;
    }

    > span {
        margin-left: 60px;
        margin-top: 15px;
        gap: 10px;
        color: ${({ theme }) => theme.COLORS.PRICE};
        font-size: 32px;
        font-weight: 400;
        font-family: "Roboto", sans-serif;
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
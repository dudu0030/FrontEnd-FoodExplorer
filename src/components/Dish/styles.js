import styled from "styled-components"; 

export const Container = styled.div`
    padding: 24px;
    display: grid;
    width: 304px;
    height: 462px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND};

    > a {
        background: none;
        border: none;
        
        svg {
           width: 24px;
           height: 24px;
           color: #FFFFFF;
           margin-left: 90%;
       }
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
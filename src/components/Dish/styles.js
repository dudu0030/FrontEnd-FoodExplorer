import styled from "styled-components"; 

export const Container = styled.div`
    padding: 24px;
    display: grid;
    width: 19rem;
    height: 28.87rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND};

    > a {
        background: none;
        border: none;
        
        svg {
           width: 1.5rem;
           height: 1.5rem;
           color: #FFFFFF;
           margin-left: 90%;
       }
    }


    > img {
        width: 11rem;
        height: 11rem;
        border: none;
        margin: 1.5rem auto;
    }

    > h2 {
        margin: 1.5rem auto 0.93rem;
        color: ${({ theme }) => theme.COLORS.LIGTH_400};
        font-size: 24px;
        font-weight: 700;
        font-family: "Poppins", sans-serif;
    }

    > h3 {
        margin-left: 1.5rem;
        margin-top: 0.93rem;
        gap: 0.62rem;
        color: ${({ theme }) => theme.COLORS.LIGTH_400};
        font-size: 14px;
        font-weight: 400;
        font-family: "Roboto", sans-serif;
    }

    > span {
        margin-left: 3.75rem;
        margin-top: 0.93rem;
        gap: 10px;
        color: ${({ theme }) => theme.COLORS.PRICE};
        font-size: 2rem;
        font-weight: 400;
        font-family: "Roboto", sans-serif;
    }
`;
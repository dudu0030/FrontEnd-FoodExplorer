import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 104px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
    }
`;

export const Content = styled.div`
    display: grid;
    margin: 2.5rem 2.68rem;
    gap: 2rem;
    
    > a {
        display: flex;
        align-items: center;
        text-decoration: none;
        margin-bottom: 1.5rem;

        color: #E1E1E6;
        font-size: 24px;
        font-weight: 700;
        font-family: "Poppins", sans-serif;

        svg {
            width: 2rem;
            height: 2rem;
        }
    }

    > img {
        width: 24.37rem;
        height: 24.31rem;
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 2.5rem;
        font-weight: 500;
        font-family: "Poppins", sans-serif;
        margin-bottom: 1.5rem;
    }

    > h3 {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 24px;
        font-weight: 300;
        font-family: "Poppins", sans-serif;
        margin-bottom: 1.5rem;
    }
`;

export const EditDish = styled(Link)`
    text-decoration: none;
    text-align: center;
    margin-top: 3rem;
    width: 8.18rem;
    height: 3rem;
    background: ${({ theme }) => theme.COLORS.BUTTON};
    border: none;
    border-radius: 0.31rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 14px;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
`;
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header;

    height: 6.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 5rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    > svg {
        width: 1.87rem;
        height: 1.87rem;
        margin-left: 7.68rem;
        background: none;
        color: #065E7C;
    }

    > div {
        margin-left: 10px;
        
        span {
            font-size: 24px;
            font-weight: 700;
            font-family: "Roboto", sans-serif;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        p {
            font-size: 12px;
            font-weight: 400;
            font-family: "Roboto", sans-serif;
            color: #82F3FF;
            margin-left: 6.5rem;
        }
    }
`;

export const Search = styled.div`
     width: 36.31rem;
     height: 3rem;
     background-color: #0D1D25;
     margin: 24px 32px;

     display: flex;
     justify-content: center;
     align-items: center;

     .search-input {
        background: none;
        border: none;
        margin: 16px 14px;
        width: 15.87rem;
        
        font-size: 16px;
        color: #7C7C8A;
        font-weight: 400;
        font-family: "Roboto", sans-serif;
     }
     
`;

export const NewDish = styled(Link)`
    
    text-decoration: none;
    text-align: center;
    margin: 24px 32px;
    width: 13.5rem;
    height: 3rem;
    padding: 12px 32px;
    background: ${({ theme }) => theme.COLORS.BUTTON};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 14px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        width: 32px;
        height: 32px;
        margin-right: 7.68rem;
    }
`;



import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BUTTON};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    height: 3rem;
    border: none;
    margin-top: 1rem;
    border-radius: 0.31rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
`;
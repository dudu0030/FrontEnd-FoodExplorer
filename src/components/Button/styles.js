import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BUTTON};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    height: 48px;
    border: 0;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
`;
import styled from 'styled-components';

export const Container = styled.button`
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGTH_100};

    border: none;
    font-size: 14px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
`;
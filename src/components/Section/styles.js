import styled from 'styled-components';

export const Container = styled.section`
    margin: auto 123px 48px;

    > h1 {
        margin-top: 63px;
        margin-bottom: 23px;

        font-size: 32px;
        font-weight: 400;
        font-family: "Poppins", sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
`;
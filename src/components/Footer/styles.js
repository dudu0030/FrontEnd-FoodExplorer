import styled from 'styled-components';

export const Container = styled.footer`

    height: 77px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 24px;
    margin-top: auto;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    > svg {
        width: 30px;
        height: 30px;
        margin-left: 123px;
        background: none;
        color: #4D585E;
    }

    > div {
        margin-left: 10px;
        
        span {
            font-size: 24px;
            font-weight: 700;
            font-family: "Roboto", sans-serif;
            color: #4D585E;
        }
    }
`;

export const Sub = styled.div`
    display: flex;
    align-items: center;

    > div {
        margin-right: 123px;
    }

        span {
            font-size: 14px;
            font-weight: 400;
            font-family: "Roboto", sans-serif;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
`;
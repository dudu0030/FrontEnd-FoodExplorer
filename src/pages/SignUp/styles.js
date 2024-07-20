import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    position: relative;
`;

export const Form = styled.form`
    padding: 64px;
    width: 476px;
    height: 621px;
    margin-top: 142px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    position: absolute;
    top: 35%;
    right: 10%;
    transform: translateY(-50%);

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    > h2 {
        font-size: 32px;
        font-weight: 500;
        font-family: "Poppins", sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        margin: 32px 64px;
    }

    > span {
        font-size: 16px;
        font-weight: 400;
        font-family: "Roboto", sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        align-self: flex-start;
        margin-bottom: 8px;
    }

    > a {
        font-size: 14px;
        font-weight: 500;
        font-family: "Poppins", sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        text-decoration: none;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    > svg {
        width: 49px;
        height: 47px;
        margin-left: 123px;
        background: none;
        color: #065E7C;
        margin-left: 153px;
    }

    > div {
        margin-left: 19px;
        
        span {
            font-size: 42px;
            font-weight: 700;
            font-family: "Roboto", sans-serif;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }
`;
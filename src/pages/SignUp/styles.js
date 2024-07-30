import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    position: relative;
`;

export const Form = styled.form`
    padding: 4rem;
    width: 29.75rem;
    height: 38.81rem;
    margin-top: 8.87rem;

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
        font-size: 2rem;
        font-weight: 500;
        font-family: "Poppins", sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        margin: 2rem 4rem;
    }

    > span {
        font-size: 16px;
        font-weight: 400;
        font-family: "Roboto", sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        align-self: flex-start;
        margin-bottom: 0.5rem;
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
        width: 3.06rem;
        height: 2.93rem;
        margin-left: 7.68rem;
        background: none;
        color: #065E7C;
        margin-left: 9.56rem;
    }

    > div {
        margin-left: 1.18rem;
        
        span {
            font-size: 2.62rem;
            font-weight: 700;
            font-family: "Roboto", sans-serif;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }
`;
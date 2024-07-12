import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 104px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 80px;

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
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        width: 32px;
        height: 32px;
        margin-right: 123px;
    }
`;


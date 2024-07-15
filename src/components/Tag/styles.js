import styled from 'styled-components';

export const Container = styled.span`
    font-size: 14px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGTH_100};
    background-color: #192227;

    width: 66px;
    height: 32px;
    padding: 4px 8px;
    gap: 8px;
    border-radius: 5px;
    margin-right: 12px;
`;
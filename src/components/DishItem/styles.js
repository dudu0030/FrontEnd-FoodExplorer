import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_600}` : "none"};

    border-radius: 8px;
    padding: 10px 16px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        width: 8px;
        height: 8px;
    }

    .button-add {
        color: #7C7C8A;
        width: 8px;
        height: 8px;
    }
`;
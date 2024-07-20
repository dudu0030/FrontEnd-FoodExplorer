import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 32px;

    > input {
        height: 56px;
        width: 100%;
        border-radius: 5px;

        padding: 12px;
        background-color: #0D1D25;
        border: none;
        color: #FFFFFF;
        
        &::placeholder {
            font-size: 16px;
            font-weight: 400;
            font-family: "Roboto", sans-serif;
            color: #7C7C8A;
        }
    }
`;
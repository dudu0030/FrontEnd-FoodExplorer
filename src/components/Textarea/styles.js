import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 172px;
    padding: 14px;
    border-radius: 8px;
    resize: none;
    background-color: #0D1D25;
    border: none;
    color: #FFFFFF;


    &::placeholder {
        font-size: 16px;
        font-weight: 400;
        font-family: "Roboto", sans-serif;
        color: #7C7C8A;

    }
`;
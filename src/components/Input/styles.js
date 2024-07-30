import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    > input {
        height: 3.5rem;
        width: 100%;
        border-radius: 0.31rem;

        padding: 0.75rem;
        background-color: #0D1D25;
        border: none;
        color: #FFFFFF;
        
        &::placeholder {
            font-size: 1rem;
            font-weight: 400;
            font-family: "Roboto", sans-serif;
            color: #7C7C8A;
        }
    }
`;
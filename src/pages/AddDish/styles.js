import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 104px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
    }
`;

export const Form = styled.form`
    display: grid;
    margin: 2.5rem 7.68rem;
    gap: 32px;
    
    > a {
        display: flex;
        align-items: center;
        text-decoration: none;
        margin-bottom: 1.5rem;

        color: #E1E1E6;
        font-size: 24px;
        font-weight: 700;
        font-family: "Poppins", sans-serif;

        svg {
            width: 2rem;
            height: 2rem;
        }
    }

    > header {
        margin-bottom: 2rem;
        color: #E1E1E6;
        font-size: 20px;
        font-weight: 400;
        font-family: "Poppins", sans-serif;
    }

    > label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 16px;
        font-weight: 400;
        font-family: "Roboto", sans-serif;
    }

    #name {
        width: 28.93rem;
        height: 3rem;
    }

    #ingredients {
        width: 52.31rem;
        height: 3rem;
    }

    #price {
        width: 15.68rem;
        height: 3rem;
    }

    > select {
        width: 22.75rem;
        height: 3rem;
        border-radius: 0.31rem;

        padding: 1rem;
        background-color: #0D1D25;
        border: none;
        color: #FFFFFF;
    }

    > button {
        width: 10.75rem;
        height: 3rem;
        margin-left: 100vh;
    }
`;

export const UploadButtonWrapper = styled.div`
    display: inline-block;
`;

export const UploadButton = styled.button`
    display: flex;
    align-items: center;
    padding: 0.75rem 2rem;
    background-color: #0D1D25;
    color: #FFFFFF;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;

    font-size: 14px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;

    > svg {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.5rem;
    }
`;

export const FileInput = styled.input`
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
`;
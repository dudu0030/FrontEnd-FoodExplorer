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
    margin: 40px 123px;
    gap: 32px;
    
    > a {
        display: flex;
        align-items: center;
        text-decoration: none;
        margin-bottom: 24px;

        color: #E1E1E6;
        font-size: 24px;
        font-weight: 700;
        font-family: "Poppins", sans-serif;

        svg {
            width: 32px;
            height: 32px;
        }
    }

    > header {
        margin-bottom: 32px;
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
        width: 463px;
        height: 48px;
    }

    #ingredients {
        width: 837px;
        height: 48px;
    }

    #price {
        width: 251px;
        height: 48px;
    }

    > select {
        width: 364px;
        height: 48px;
        border-radius: 5px;

        padding: 16px;
        background-color: #0D1D25;
        border: none;
        color: #FFFFFF;
    }

    > button {
        width: 172px;
        height: 48px;
        margin-left: 100vh;
    }

    #remove {
        width: 135px;
        height: 48px;
        padding: 12px 24px;
        border-radius: 5px;
        border: none;
        background-color: #0D161B;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 14px;
        font-weight: 500;
        font-family: "Poppins", sans-serif;
    }
`;

export const UploadButtonWrapper = styled.div`
    display: inline-block;
`;

export const UploadButton = styled.button`
    display: flex;
    align-items: center;
    padding: 12px 32px;
    background-color: #0D1D25;
    color: #FFFFFF;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    font-size: 14px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;

    > svg {
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
`;

export const FileInput = styled.input`
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
`;
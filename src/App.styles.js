import styled from 'styled-components';

const commonStyle = `border: 1px solid black;
margin: 1px 2px;
font-family: 'Ubuntu', sans-serif;
font-size: 16px;
background-color: #f3f7f6;
scroll-behavior: smooth;
`;

export const TextArea = styled.textarea`
    width: ${(props) => props.width};
    height: 40vh;
    resize: none;
    padding: 0;
    ${commonStyle}

    @media (min-width: 800px) {
        height: ${(props) => props.height};
        font-size: 20px;
        padding: 5px 10px;
        border: 2px solid black;
    }
`;

export const Preview = styled.div`
    width: ${(props) => props.width};
    max-width: ${(props) => props.width};
    height: 60vh;
    overflow-y: scroll;
    ${commonStyle}

    @media (min-width: 800px) {
        height: ${(props) => props.height};
        font-size: 20px;
        padding: 5px 10px;
        border: 2px solid black;
        border-left: none;
        margin: 1px 0;
    }
`;

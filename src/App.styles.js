import styled from 'styled-components';

const commonStyle = `width: 95%;
border: 1px solid black;
margin: 1px 2px;
font-family: 'Ubuntu', sans-serif;
font-size: 16px;
background-color: #f3f7f6;
scroll-behavior: smooth;
align-self: center;
`;

const mediaStyle = `font-size: 20px;
padding: 5px 10px;
border: 2px solid black;
align-self: auto;
`;

export const TextArea = styled.textarea`
    height: 40vh;
    resize: none;
    padding: 0;
    ${commonStyle}

    @media (min-width: 768px) {
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        ${mediaStyle}
    }
`;

export const Preview = styled.div`
    height: 60vh;
    overflow-y: scroll;
    ${commonStyle}

    @media (min-width: 768px) {
        width: ${(props) => props.width};
        max-width: ${(props) => props.width};
        height: ${(props) => props.height};
        border-left: none;
        ${mediaStyle}
    }
`;

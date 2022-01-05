import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
}

table {
    border-collapse: collapse;
}

pre code{
    background-color: #93d9c9;
    font-weight: 500;
    display: block;
    white-space: pre;
    overflow-x: scroll;
    max-width: 100%;
    min-width: 100px;
    padding: 0;
}

blockquote{
    border-left: 5px solid #93d9c9;
    padding-left: 5px;
}

td, th {
    border: 1px solid #999;
    padding: 0.5rem;
    text-align: left;
}

img {
    width: 80%;
}

#root {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: nowrap;
    
    @media(max-width: 800px) {
        flex-direction: column;
    }
}
`;

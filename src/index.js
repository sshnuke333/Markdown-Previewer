import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyle } from './index.styles';

render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('root')
);

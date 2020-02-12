import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #app-root {
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.5;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;

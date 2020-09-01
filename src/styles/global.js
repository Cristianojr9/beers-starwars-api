import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
  
  button + button {
    margin-top: 10px;
  }

  button {
    cursor: pointer;
    margin-top: 10px;
    width: 300px;
    height: 70px;
    font-size: 20px;
    font-weigth: bold;
    color: #fff;
    background: #7159c1;
    border: 0;
    border-radius: 4px;
    transition: background 0.2s;
   
    &:hover {
      background: ${darken(0.03, '#7159c1')};
    }
  }
`;
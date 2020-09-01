import styled from 'styled-components';
import { darken } from 'polished';


export const Container = styled.div`
  section {
    display: grid;

    button + button {
      margin-top: 10px;
    }

    button {
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
  }
`;

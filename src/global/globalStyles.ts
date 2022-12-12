import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    outline: none;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }
html, body, input, button, textarea {
  font-family: 'Red Hat Display', sans-serif;
  font-size: 1rem;
  color: #fff;
}
`;

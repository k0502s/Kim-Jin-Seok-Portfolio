import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html {
    width: 100%;
    overflow-x: hidden;
}
body {
    width: 100%;
    height: 100%;
    background-color: #47a0aa;
    background-size: cover;
    margin: 0;
    padding: 0;
    font-size: large;
    font-family: 'Do Hyeon', sans-serif;
    overflow-x: hidden;
}
*, *:before, *:after {
    outline: none;
    user-select: none;
  }
  a,
  a:hover,
  a:focus {
      color: inherit;
      text-decoration: none;
      transition: all 0.3s;
  }

  hr {
    margin: 0 80px;
  }

  #main-body {
    min-height: 300vh;
    margin-top: 100px;
    @media only screen and (max-width: 767px) {
    margin-top: 100px;
}
}
  `;

export default GlobalStyle;

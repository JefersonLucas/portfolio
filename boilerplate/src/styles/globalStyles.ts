import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Fira sans", Arial, sans-serif;
  }

  ul {
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

export default GlobalStyles

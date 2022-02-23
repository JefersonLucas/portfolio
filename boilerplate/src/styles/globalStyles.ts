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

    &::-webkit-scrollbar {
      width: 12px;
    }
    
    &::-webkit-scrollbar-track {
      cursor: pointer;
      background: #e0e0e0;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #a839ff;
      border-radius: 20px;
    }
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

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html { 
        
    font-size: 62.5%;

    @media(max-width: 56.25em){
        font-size: 50%;
    }
    
    @media(min-width: 112.5em){
        font-size: 75%;
    }

    @media(max-width: 75em){
        font-size: 62,25%;
    }

    }

    body{
        font-family: 'Nunito Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    } 
`
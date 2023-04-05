import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    
    html, body, #root {
        height: 100%;
        font-family: Arial, sans-serif;
        background-color: #e1e6e3;
        scroll-behavior: smooth;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: #fff;
    }
`;
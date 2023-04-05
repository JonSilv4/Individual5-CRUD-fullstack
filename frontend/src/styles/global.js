import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        font-family: 'Varela', sans-serif;
    }

    header {
        padding: 10px;
        display: flex;
        align-items: center;
        background-color: #4682B4;
        justify-content: space-between;
        color: white;
        width: 100%;
        position: fixed;
        margin-top: -60px;
        width: 100vw;
    }

    h1 {
        color: #98FB98;
        margin-left: 20px;
        
    }

    body {
        width: 100vw;
        margin-top: 60px;
        height: 100vh;
        display: flex;
        justify-content: center;
        background-color: #f2f2f2;
    }
`;

export default Global;
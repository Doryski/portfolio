import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        font-display: swap;
        src: url('/fonts/Montserrat/Montserrat-Regular.ttf');
    }
    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-tap-highlight-color: transparent;
    }

    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: inherit;
    }

    button {
        cursor: pointer;
        text-align: center;
    }

    input, input::placeholder, textarea, button {
        font-family: inherit;
        outline: none;
    }
`

export default GlobalStyle

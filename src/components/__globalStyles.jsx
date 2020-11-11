import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #F8B52F;
    --bckgPrimary: #FFFFF8;
    --bckgSecondary: #211806;
    --bckgFooter: #211806;
    --fontDarkPrimary: #FFFFFF;
    --fontDarkSecondary: rgba(0, 0, 0, 0.51);
  }
  * {
    padding: 0;
    margin: 0;
    
    font-family: Montserrat;
  }
  
  html,body {
    padding: 0;
    margin: 0;
    background: red;
  }
`

export default GlobalStyle;

import { createGlobalStyle } from "styled-components"
import React from "react"

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
  }
  
  .fadein {
    transition: opacity 500ms;
  }
  
  .fadein-enter,
  .fadein-leave {
      opacity: 1;
  }
  
  .fadein-leave,
  .fadein-enter {
      opacity: 0;
  }

`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}


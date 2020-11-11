import React from 'react';
import styled from 'styled-components';
import GlobalStyle from "./__globalStyles";
import TopBar from "./TopBar";
import Footer from "./Footer";
import useScrollInfo from "react-element-scroll-hook";

// const PANES_BREAKPOINTS = {
//   welcome: [0, 922],
//   offer: [923, 1945],
//   contact: [1946]
// }
//
// const setProperSearch = (y) => {
//   const currHash = window.location.hash;
//   const properHash = Object.keys(PANES_BREAKPOINTS).find(key => y <= PANES_BREAKPOINTS[key][1] && y >= PANES_BREAKPOINTS[key][0]);
//   console.log('this.properSearch', properSearch);
//
//   if (currSearch !== properSearch) {
//     debugger;
//     // window.history.pushState({ search: properSearch})
//   }
// }

export default function Layout({ children }) {
  const [scrollInfo, setRef] = useScrollInfo();
  // console.log('scrollinfo', scrollInfo);

  // setProperSearch(scrollInfo.y.value)
  if (typeof window !== "undefined") {
    // console.log('scroll script loads up')
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <Wrap id='page-wrap' ref={setRef}>
      <GlobalStyle/>
      <TopBar/>
      {children}
      <Footer scrolledToTop={scrollInfo?.y?.value === 0}/>
    </Wrap>
  )
}

const Wrap = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
`

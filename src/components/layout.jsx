import React from 'react';
import styled from 'styled-components';
import TopBar from "./TopBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Wrap id='page-wrap'>
      <TopBar/>
      {children}
      <Footer scrolledToTop={true}/>
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

import React from 'react';
import styled from 'styled-components';
import TopBar from "./TopBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Wrap id='page-wrap'>
      <TopBar/>
      {children}
    </Wrap>
  )
}

const Wrap = styled.div``

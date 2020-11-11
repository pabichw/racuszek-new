import React from 'react';
import styled from 'styled-components';
import {AnchorLink} from "gatsby-plugin-anchor-links";

const ScrollIncent = () => {
  return (
    <Wrapper>
      <AnchorLink to="#offer"><span/>Przewiń w dół</AnchorLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  opacity: 0.4;
  
  &:hover {
    opacity: 0.76;
  }
  
  & > a {
    position: absolute;
    font-size: 12px;
    text-decoration: none;
    padding-top: 54px;
    color: #000;
    
  }
  
  & > a > span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 30px;
    height: 50px;
    margin-left: -15px;
    border: 2px solid #000;
    border-radius: 50px;
    box-sizing: border-box;
  }
  & > a > span::before {
    position: absolute;
    top: 10px;
    left: 50%;
    content: '';
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: #000;
    border-radius: 100%;
    -webkit-animation: sdb10 2s infinite;
    animation: sdb10 2s infinite;
    box-sizing: border-box;
  }
  @-webkit-keyframes sdb10 {
    0% {
      -webkit-transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      -webkit-transform: translate(0, 20px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes sdb10 {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      transform: translate(0, 20px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`

export default ScrollIncent;

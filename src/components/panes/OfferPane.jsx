import React from 'react';
import Fade from "react-reveal";
import Button from "../Button";
import ScrollIncent from "../ScrollIncent";
import styled from "styled-components";
import {BREAKPOINTS, NAV} from "../../utils/styling";
import Pane from "../Page";

const OfferPane = () => {
    return (
        <Pane id='offer' customStyle={`background: #fff;`}>
            <Content>
                <Title>Hello</Title>
            </Content>
        </Pane>
    );
};

const Content = styled.header`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - ${NAV.height});
  
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    flex-direction: column;
    margin-top: 3r5px;
  }
`;

const Title = styled.h1`
  font-family: LilyScriptOne;
  font-size: 50px;
  
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    text-align: center;
    font-size: 32px;
  }
`

export default OfferPane;
import React from 'react';
import styled from 'styled-components';
import Logo from "./Logo";
import CSSTransitionGroup from 'react-addons-css-transition-group';
import '../style/animations.css'
import {AnchorLink} from "gatsby-plugin-anchor-links";
const timeout = 500;

const Footer = ({scrolledToTop}) => (
  <Container>
    <CSSTransitionGroup
        transitionName="fadein"
        transitionEnterTimeout={timeout}
        transitionLeaveTimeout={timeout}
    >
      {!scrolledToTop && <Content>
        <div/>
        <AnchorLink to="#">
          <LogoWrapper>
            <Logo white/>
          </LogoWrapper>
        </AnchorLink>
      </Content>}
    </CSSTransitionGroup>
  </Container>
);

const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
`
const Content = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bckgFooter);
  height: 50px;
  width: 100%;
  
  box-shadow: #000 0 0 6px;
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 150px;
  zoom: 0.8; // !!!!
`;

export default Footer;
import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import {animateUnderlineHover, BREAKPOINTS, NAV} from '../utils/styling';
import Fade from 'react-reveal/Fade';
import { slide as Menu } from 'react-burger-menu'
import {AnchorLink} from "gatsby-plugin-anchor-links";

const CallUs = () => (
  <CallWrapper>
    <Fade right>
    <CallText>Zadzwoń:</CallText>
    <PhoneWrap>
      <PhoneIcon src={'images/phone.svg'}/>
      <PhoneNumber href="tel:+48 123 123 21" >+48 123 123 21</PhoneNumber>
    </PhoneWrap>
    </Fade>
  </CallWrapper>
)

const CallWrapper = styled.div`
  position: fixed;
  right: 26px;
  top: 5px;
  text-align: right;
`;

const CallText = styled.p`
  font-size: 14px;
  font-family: MontserratBold;
`;

const PhoneWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PhoneIcon = styled.img`
  height: 1.2em;
  margin-right: 5px;
`;

const PhoneNumber = styled.a`
  color: #000;
  line-height: 1.5em;
  text-decoration: none;
  font-size: 15px;
`;

const TopBar = () => {
  return (
    <>
      <Content>
        <Fade top>
          <Nav>
            <Options>
              <Option>
                <AnchorLink to="#offer" title="Oferta"/>
              </Option>
              <Option>
                <AnchorLink to="#about-us" title="O Nas"/>
              </Option>
              <LogoWrapper>
                <Logo/>
              </LogoWrapper>
              <Option>
                <AnchorLink to="#contact" title="Kontakt"/>
              </Option>
              <Option>
                <AnchorLink to="#carrer" title="Praca"/>
              </Option>
            </Options>
          </Nav>
        </Fade>
        <CallUs/>
      </Content>
      <MobileToggle>
        <Menu customBurgerIcon={ <BurgerIcon src={'images/menu.svg'} /> } width={ 280 } pageWrapId="page-wrap" >
          <MobileOption>
            <AnchorLink to="#offer" title="Oferta"/>
          </MobileOption>
          <MobileOption>
            <AnchorLink to="#about-us" title="O Nas"/>
          </MobileOption>
          <MobileOption>
            <AnchorLink to="#contact" title="Kontakt"/>
          </MobileOption>
          <MobileOption>
            <AnchorLink to="#carrer" title="Praca"/>
          </MobileOption>
        </Menu>
      </MobileToggle>
    </>
    
  );
};

const Content = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: ${NAV.height};
`;

const MobileToggle = styled.div`
  position: fixed;
  top: 8px;
  left: 14px;
  width: 38px;
  height: 38px;
  z-index: 999;
  
  display: none;
  @media screen and (max-width: ${BREAKPOINTS.TABLET}) {
    display: block;
  }
`

const BurgerIcon = styled.img`
  width: 28px;
  height: 28px;
`

const Nav = styled.nav`
  cursor: pointer;
`

const Options = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: ${BREAKPOINTS.TABLET}) {
    & > li {
      display: none;
    }
  }
`

const Option = styled.li`
  position: relative;
  min-width: 231px;
  text-align: center;
  height: 23px;
  
  & > a {
    font-family: MontserratBold;
    font-size: 16px;
    color: #000;
    text-decoration: none;
    @media screen and (max-width: ${BREAKPOINTS.TABLET}) {
      width: 100px;
    }
    
    ${animateUnderlineHover({color: 'var(--primary)', width: '60%'})
  }
`

const MobileOption = styled.li`
  & > a {
    display: block;
    text-decoration: none;
    color: #fff;
    margin-bottom: 8px;
    font-size: 32px;
  }
`;

const LogoWrapper = styled.div`
  width: 200px;
  position: relative;
  &:after {
    content: '',
    position: absolute;
    left:0;
    top: 0;
    height: 9px;
    width: 9px;
    background: red;
  }
`

export default TopBar;

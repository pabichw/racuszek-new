import React from 'react';
import styled from 'styled-components';
import Logo from "./Logo";
import Link from 'next/link';

const Footer = () => (
  <Container>
    <Content>
      <Left/>
      <Center>
        <Link href="#">
          <A>
            <LogoWrapper>
              <Logo white/>
            </LogoWrapper>
          </A>
        </Link>
      </Center>
      <SocialWrapper>
        <SocialIconWrapper>
          <a href="https://fb.com/108862534368448">
            <Icon src='./images/facebook.svg' />
          </a>
        </SocialIconWrapper>
        <SocialIconWrapper>
          <a href="https://instagram.com">
            <Icon src='./images/instagram.svg' />
          </a>
        </SocialIconWrapper>
      </SocialWrapper>
    </Content>
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
  justify-content: space-between;
  align-items: center;
  background-color: var(--bckgFooter);
  height: 50px;
  width: 100%;
  box-shadow: #000 0 0 6px;
`;

const Left = styled.div`
  padding-left: 28px;
  width: 106px;
`;

const Center = styled.div`
  width: 300px;
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 150px;
  zoom: 0.8;
  margin: 0 auto;
`;

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const SocialWrapper = styled.div`
  display: flex;
  
  padding-right: 40px;
  justify-content: space-between;
  align-items: center;
`;

const SocialIconWrapper = styled.div`
  height: 28px;
  width: 28px;
  cursor: pointer;
  margin-left: 10px;
  
  &:first-child {
    margin-left: 0;
  }
`;

const Icon = styled.img`
  height: 100%;
  width: 100%;
  opacity: 0.6;
  transition: 0.13s ease;
  
  &:hover {
    opacity: 1;
  }
`;

export default Footer;

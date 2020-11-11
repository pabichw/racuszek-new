import React from 'react';
import styled from 'styled-components';
const Logo = (props) => {
  return (
    <Content {...props}>
      LOGO
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: LilyScriptOne;
  font-size: 32px;
  color: ${props => props.white ? 'white' : 'black'};
  
  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    left: 0;
    background: var(--primary);
  }
  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    right: 0;
    background: var(--primary);
  }
`

export default Logo;

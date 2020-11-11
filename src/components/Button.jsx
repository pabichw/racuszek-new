import React from 'react';
import styled from 'styled-components';

const Button = ({withArrowIcon, children}) => {
  return (
    <CustomButton>
      {children}
      {withArrowIcon && <IconWrap><Arrow src={'images/right-arrow.svg'}/></IconWrap>}
    </CustomButton>
  );
};

const CustomButton = styled.button`

  -webkit-appearance: none;
  -moz-appearance: none;
  text-decoration: none;
  border: 0;

  position: relative;
  width: auto;
  padding: 0 65px;
  height: 67px;
  border-radius: 57px;
  background: var(--primary);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-family: MontserratBold;
  
  cursor: pointer;
  box-shadow: #000 0 2px 0 4px;
  
  &: hover {
    opacity: 0.8;
  }
`;

const IconWrap = styled.div`
  position: relative;
  margin-left: 20px
`

const Arrow = styled.img`
  position: absolute;
  top: -12px;
  height: 24px;
`

export default Button;

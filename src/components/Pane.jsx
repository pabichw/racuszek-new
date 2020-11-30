import React from 'react';
import styled from 'styled-components';
import {Element} from 'react-scroll';

const Pane = ({children, customStyle, id}) => {
  return (
    <Wrapper id={id} customStyle={customStyle}>
      <Element name={id}>
        {children}
      </Element>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 50px; // top bar height;
  font-family: Montserrat;
  
  ${props => props.customStyle}
`;

export default Pane;

import React from 'react';
import styled from 'styled-components';

const Pane = ({children, customStyle, id}) => {
  return (
    <Wrapper id={id} customStyle={customStyle}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 50px; // top bar height;
  font-family: Montserrat;
  
  scroll-snap-align: center;
  
  ${props => props.customStyle}
`;

export default Pane;

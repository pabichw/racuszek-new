import React from 'react';
import styled from "styled-components";
import {BREAKPOINTS, NAV} from "../../utils/styling";
import Pane from "../Pane";

const ContactPane = ({page}) => {
  const { content, title } = page
  return (
    <Pane id='contact' customStyle={`background: var(--bckgPrimary);`}>
      <Content>
          <Title>{title}</Title>
          <p dangerouslySetInnerHTML={ {__html :content}}/>
      </Content>
    </Pane>
  );
};

const Content = styled.header`
  display: flex;
  flex-direction: column;
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

export default ContactPane;

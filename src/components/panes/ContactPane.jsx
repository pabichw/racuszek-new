import React from 'react';
import styled from "styled-components";
import {BREAKPOINTS, NAV} from "../../utils/styling";
import Pane from "../Pane";
import Map from "../GoogleMap"

const ContactPane = ({page}) => {
  const { content, title } = page

  const address = content.match(/(?<=_ADRES_)[\S\s]*(?=_ADRES_KONIEC)/g)[0]
  const contact = content.match(/(?<=_KONTAKT_)[\S\s]*(?=_KONTAKT_KONIEC)/g)[0]

  return (
    <Pane id='contact' customStyle={`background: var(--bckgPrimary);`}>
      <Content>
          <Title>{title}</Title>
          <Main>
            <Left>
              <ContactWrapper>
                <ContactChunk>
                  <ContactChunkTitle>Adres</ContactChunkTitle>
                  <ContactChunkLine dangerouslySetInnerHTML={ {__html : address}} />
                </ContactChunk>
                <ContactChunk>
                  <ContactChunkTitle>Zadzwoń lub napisz</ContactChunkTitle>
                  <ContactChunkLine dangerouslySetInnerHTML={{__html: contact}}/>
                </ContactChunk>
              </ContactWrapper>
              <MapWrapper>
                <Map position={[51.409709, 19.699176]}/>
              </MapWrapper>
            </Left>
            <Right>
              dupa

            </Right>
          </Main>
      </Content>
    </Pane>
  );
};

const Content = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: calc(100vh - ${NAV.height});
  
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    flex-direction: column;
    margin-top: 35px;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  padding-left: 48px;
  width: fit-content;
  
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    text-align: center;
    font-size: 32px;
  }
`

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0;
  width: 100%;
  height: 100%;
  margin: 0 60px;
  
  & > div {
    border-right: 1px solid #000;
  }
  
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    flex-direction: column;
    
    & > div {
      border-right: none;    
    }
  }
`;

const Left = styled.div`
  width: 50%;
  max-height: 744px;
  min-height: 80%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const Right = styled.div`
  width: 50%;
  max-height: 744px;
  min-height: 80%;
`

const ContactWrapper = styled.div`
  width: 100%;
`;

const ContactChunk = styled.div`
  display: block;
  margin-bottom: 58px; 
`

const ContactChunkTitle = styled.h4`
  opacity: 0.6;
  position: relative;
  margin-bottom: 2px;
  font-size: 19px; 
  font-weight: bold;
  width: fit-content;
  
  &:after {
    content: '';
    position: absolute;
    width:105%;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 1px solid #070707;
    
  }
`;

const ContactChunkLine = styled.p`
  font-size: 28;
  line-height: 1.4em;
`;

const MapWrapper = styled.div`
  margin-right: 20px;
  height: 200px;
  border-radius: 15px;
  overflow: hidden;
`;

export default ContactPane;

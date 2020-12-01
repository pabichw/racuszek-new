import React from 'react';
import styled from "styled-components";
import {BREAKPOINTS, NAV} from "../../utils/styling";
import Pane from "../Pane";
import PhotoGallery from "../PhotoGallery"

const OfferPane = ({ page, media }) => {
  const { content, title } = page
  return (
    <Pane id='oferta' customStyle={`background: #fff;`}>
      <Content>
        <Title>{title}</Title>
        <Article dangerouslySetInnerHTML={{__html: content}}/>
        <PhotoGridWrap>
          <PhotoGallery images={media} srcPath="mediaItemUrl" altPath="description" />
        </PhotoGridWrap>
      </Content>
    </Pane>
  );
};

const Content = styled.div`
  width: 100%;
  min-height: calc(100vh - ${NAV.height});
  
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    flex-direction: column;
    margin-top: 15px;
  }
`;

const Title = styled.h1`
  font-family: LilyScriptOne;
  font-size: 50px;
  padding-left: 48px;
  
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 32px;
    padding-left: 30px;

  }
`

const Article = styled.article`
  padding: 35px 60px 35px;
  
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    padding: 35px 30px 35px;
  }
`;

const PhotoGridWrap = styled.div`
  padding: 0 60px;

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    padding: 0 30px;
  }
`;


export default OfferPane;

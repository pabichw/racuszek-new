import React from 'react';
import Layout from "../src/components/layout"
import styled from "styled-components"
import { BREAKPOINTS } from "../src/utils/styling"
import { getAboutUs } from "../src/api/calls"

export default function ONas({aboutUsContent}) {
  console.log('aboutUsContent', aboutUsContent)
  const content = aboutUsContent?.content;
  return (
    <Layout>
      <Content>
        <Title>O nas</Title>
        <Article dangerouslySetInnerHTML={{ __html: content }}/>
      </Content>
    </Layout>
  )
}

const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 25px 0;

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    flex-direction: column;
    margin-top: 80px;
  }
`;

const Title = styled.h1`
  font-family: LilyScriptOne;
  font-size: 50px;
  text-align: left;
  width: calc(100% - 80px);
  
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    text-align: center;
    font-size: 32px;
  }
`

const Article = styled.article`
  padding: 35px 60px 35px;
  width: calc(100% - 120px);
  overflow-x: hidden;
  
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    padding: 35px 30px 35px;
  }
`;


export async function getStaticProps() {
  const aboutUsContent = await getAboutUs();
  return {
    props: { aboutUsContent },
  }
}

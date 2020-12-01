import React from 'react'
import Layout from '../src/components/layout';
import styled from 'styled-components';

export default () => (
  <Layout>
    <Container>
      <Content>
        <h1>O nie, ta strona nie istnieje!</h1>
        <h4>Sprawdz czy adres jest poprawny</h4>
      </Content>
    </Container>
  </Layout>
)


const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 4em;
  min-height: calc(100vh - 85px);
`

const Content = styled.div`
  text-align: center;
`

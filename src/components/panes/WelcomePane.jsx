import React from 'react';
import Fade from "react-reveal";
import Button from "../Button";
import ScrollIncent from "../ScrollIncent";
import styled from "styled-components";
import {BREAKPOINTS, NAV} from "../../utils/styling";
import Pane from "../Page";

const WelcomePane = () => {
    return (
        <Pane id='welcome' customStyle={`background: linear-gradient(var(--bckgPrimary) 50%, var(--bckgPrimary) 100%);`}>
            <Content>
                <Left>
                    <Fade left cascade>
                        <div>
                            <Title>Wypieki to nasza pasja</Title>
                            <Subtitle>Najlepsze wypieki w Łodzi<br/>Zapoznaj się z naszą ofertą poiniżej</Subtitle>
                            <ButtonWrapper>
                                <Button withArrowIcon>Zobacz</Button>
                            </ButtonWrapper>
                        </div>
                    </Fade>
                </Left>
                <Right>
                    <Fade right>
                        <ImageWrapper>
                            <Image src={`images/basket-2816374_1920.png`} />
                            <Shadow/>
                        </ImageWrapper>
                    </Fade>
                </Right>
                <ScrollIncentWrapper>
                    <ScrollIncent/>
                </ScrollIncentWrapper>
            </Content>
        </Pane>
    );
};

const Content = styled.header`
  display: flex;
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

const Left = styled.div`
  margin-right: 100px;
  
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    margin-right: 0;
  }
`;

const Right = styled.div`
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    margin-top: 30px;
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

const Subtitle = styled.h3`
  color: var(--fontDarkSecondary);
  font-size: 16px;
  margin-top: 34px;
  line-height: 1.6em;
  
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    text-align: center;
    font-size: 12px;
    margin-top: 8px;

  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
`;

const Image = styled.img`
  width: 100%;
  position: relative;
  z-index: 2;
`;

const Shadow = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50px;
  border-radius: 50%;
  
  background: transparent radial-gradient(closest-side at 50% 50%, #0000003C 0%, #0C0C0C27 74%, #7B7B7B00 100%) 0% 0% no-repeat padding-box;
  z-index: 1;
`;

const ButtonWrapper = styled.div`
  margin-top: 34px;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    justify-content: center;
    margin-top: 20px;
  }
`;

const ScrollIncentWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  height: 65px;
  width: 100px;
  left: 50%;
  transform: translateX(-50%);
`


export default WelcomePane;
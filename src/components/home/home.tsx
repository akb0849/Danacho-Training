import React from 'react'
import { Wrapper,Container,SaleTitle,TimerNumber,TimerTitle,WelcomeTitle, TimerContainer, TimerWrapper, Row, Col } from './homeElements'

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <WelcomeTitle>Welcome to Danacho</WelcomeTitle>
        <SaleTitle>Presale Start Time</SaleTitle>
        <TimerWrapper>
          <Row>
            <TimerContainer>
              <TimerNumber>0</TimerNumber>
              <TimerTitle>days</TimerTitle>
            </TimerContainer>
            <TimerContainer>
              <TimerNumber>0</TimerNumber>
              <TimerTitle>hours</TimerTitle>
            </TimerContainer>
          </Row>
          <Col>
            <TimerContainer>
              <TimerNumber>0</TimerNumber>
              <TimerTitle>minutes</TimerTitle>
            </TimerContainer>
            <TimerContainer>
              <TimerNumber>0</TimerNumber>
              <TimerTitle>seconds</TimerTitle>
            </TimerContainer>
          </Col>
        </TimerWrapper>
        <SaleTitle>Presale End Time</SaleTitle>
        <TimerWrapper>
        <Row>
            <TimerContainer>
              <TimerNumber>0</TimerNumber>
              <TimerTitle>days</TimerTitle>
            </TimerContainer>
            <TimerContainer>
              <TimerNumber>0</TimerNumber>
              <TimerTitle>hours</TimerTitle>
            </TimerContainer>
          </Row>
          <Col>
            <TimerContainer>
              <TimerNumber>0</TimerNumber>
              <TimerTitle>minutes</TimerTitle>
            </TimerContainer>
            <TimerContainer>
              <TimerNumber>0</TimerNumber>
              <TimerTitle>seconds</TimerTitle>
            </TimerContainer>
          </Col>
        </TimerWrapper>

      </Container>
    </Wrapper>
  )
}

export default Home
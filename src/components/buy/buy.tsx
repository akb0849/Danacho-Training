import React from 'react'
import styled from 'styled-components'
import { Wrapper, ConnectButton,Container,Input,Title, InputContainer, InputTitle } from './buyElements'

const Buy = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          Buy Danacho (NAC)
        </Title>
        <InputContainer>
          <InputTitle>Enter ETH</InputTitle>
          <Input />
        </InputContainer>
        <ConnectButton>Connect Wallet</ConnectButton>
      </Container>
    </Wrapper>
  )
}

export default Buy
import React from 'react'
import Modal from '../../subComponents/modal/connectWallet'
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
        <ConnectButton><Modal/></ConnectButton>
      </Container>
    </Wrapper>
  )
}

export default Buy
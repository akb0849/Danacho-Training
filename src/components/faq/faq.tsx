import React from 'react'
import styled from 'styled-components'
import CollapsibleContainer from '../../subComponents/collapsibleContainer/collabsibleContainer'
import { CollapsibleWrapper, Title, Wrapper } from './faqElements'

const FAQ = () => {
  return (
    <Wrapper>
      <Title>Frequently Asked Questions</Title>
     <CollapsibleWrapper>
      <CollapsibleContainer title="1. I can't see my funds. Did I just lose all my Danacho?">
          You probably didn't. It's very hard to simply 'lose' your tokens, since they are technically nowhere. Your coins 'live' on the blockchain and are linked to your account through a system of public and private keys secured by cryptography. That's why if you don't see your funds, it's probably because of a technical issue. Take a look at the 'Resources & Help' section at the top of this page for a list of useful resources that will help you identify and fix your problem.       
        </CollapsibleContainer>
        <CollapsibleContainer title="2. What is Danacho">
          Danacho is an ERC-20 token built on the Ethereum blockchain. As a collectible meme token and cryptocurrency, Danacho strives to be a low cost bridge for international transactions.
        </CollapsibleContainer>
        <CollapsibleContainer title="3. Why is Danacho called 'Danacho'?">
        The origin of the name is derived from a nickname.
        </CollapsibleContainer>
        <CollapsibleContainer title="4. How can I get Danacho?">
        Above, if you connect a wallet, you can purchase Danacho directly from this website. Some wallets include functionality to easily buy Danacho with fiat or other cryptocurrencies. Also, you can buy Danacho from an exchange or from an individual. Exchanges are the most common way to buy Danacho (Etherfork, Forkdelta, Bitcratic, etc.) You can also directly trade Danacho for national currencies (USD, EUR, GBP, etc) or other cryptocurrencies on many exchanges. Some require KYC (proof of identification); others do not, like decentralized exchanges. 
        </CollapsibleContainer>
        <CollapsibleContainer title="5. How does Danacho have value?">
        Danacho has value because people are willing to buy it. If no one is willing to buy Danacho, then it will not have any value. Danacho’s price increases if demand exceeds supply, and it decreases if supply exceeds demand.
        </CollapsibleContainer>
     </CollapsibleWrapper>
    </Wrapper>
  )
}

export default FAQ


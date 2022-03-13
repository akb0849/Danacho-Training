import React from 'react';
import styled from 'styled-components';
import './App.css';
import Buy from './components/buy/buy';
import BuyInfo from './components/buyInfo/buyInfo';
import Contact from './components/contact/contact';
import FAQ from './components/faq/faq';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Home />
      <Buy />
      <BuyInfo />
      <FAQ />
      <Contact />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`

`
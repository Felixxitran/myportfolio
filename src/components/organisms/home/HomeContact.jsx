import React from 'react';
import styled from "styled-components";
import { LinkButton } from '../../atoms/button/LinkButton';

export const HomeContact = () => {

  return (
    <>
      <SContainer>
        <STitle>CONTACT</STitle>
        <SContent>If you have any question , please feel free to contact</SContent>
        <LinkButton url="/contact">CONTACT</LinkButton>
      </SContainer>
    </>
  );
}

const SContainer = styled.div`
  width: 100%;
  height: 60vh;
  min-height: 700px;
  margin: 0 auto;
  background-image: url('${window.location.origin}/img/background-totoro.jpeg');
  background-size:  cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const SContent = styled.div`
  font-size: 13px;
  font-weight:700;
  letter-spacing: .05em;
  line-height: 24px;
  color: #000;
  width: 90%;
  max-width: 500px;
  text-align: center;
`

const STitle = styled.h2`
  font-family: 'Noto Serif',serif;
  font-size: 24px;
  font-weight:700;
  letter-spacing: .08em;
  width: 200px;
  color: #000;
  position: relative;
  z-index: 9999;
  text-align: center;
  margin: 0 0 30px 0;
`
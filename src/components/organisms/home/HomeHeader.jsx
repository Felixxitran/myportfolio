import React from 'react';
import styled from "styled-components";
import backgroundPc from '../../pages/img/ghost.jpeg'
import { LinkButton } from '../../atoms/button/LinkButton';

export const HomeHeader = () => {

  return (
    <>
      <SContainer>
        <Stitle>Felixxi's Portfolio</Stitle>
        <SContent>Third year Mathematics student . My passion with applications development brought me to University of British Columbia where I am working on my Bachelor of Science. I like to solve problems and I like to code . My favourite food is snail rice noodle =]]] </SContent>
        <LinkButton url="/skill">SKILL</LinkButton>
      </SContainer>
    </>
  );
}


// HEADER
const SContainer = styled.div`
  text-align: center;
  height: 80vh;
  min-height: 500px;
  background-image: url(${backgroundPc});
  background-size:  cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Stitle = styled.h1`
  font-family: 'Noto Serif',serif;
  font-weight: 400;
  font-size: 34px;
  letter-spacing: .08em;
  color: #fff;
`
const SComment = styled.p`
  margin: 0 auto;
  width: fit-content;
  max-width: 500px;
  font-size: 10px;
  letter-spacing: .05em;
  line-height: 24px;
`

const SContent = styled.p`
  margin: 30px auto 0 auto;
  font-size: 13px;
  letter-spacing: .05em;
  line-height: 24px;
  color: #fff;
  width: 90%;
  max-width: 500px;
`
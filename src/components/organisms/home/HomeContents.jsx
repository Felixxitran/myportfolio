import React from 'react';
import styled from "styled-components";
import media from 'styled-media-query';
import { LinkButton } from '../../atoms/button/LinkButton';

export const HomeContents = (props) => {
  const { menus } = props;
  return (
    <>
      {
        React.Children.toArray(menus.map((e) => (
          <SContentsContainer>
            {
              e.type === "right" ?
              (
                <SContentsRight>
                  <SContentTitle>{e.title}</SContentTitle>
                  <LinkButton url={e.url}>VIEW MORE</LinkButton>
                </SContentsRight>
              )
              :
              (
                <SContentsLeft>
                  <SContentTitle>{e.title}</SContentTitle>
                  <LinkButton url={e.url}>VIEW MORE</LinkButton>
                </SContentsLeft>
              )
            }
          </SContentsContainer>
        )))
      }
    </>
  );
}

const SContentsContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  height: 60vh;
  min-height: 60vh;
  max-height: 500px;
  margin: 0 auto;
  position: relative;
  background-size:  cover;
  background-repeat: no-repeat;

 :nth-of-type(1) {
  margin: -10px auto 0 auto;
  background-image: url('${window.location.origin}/img/background-cat.jpg');

 }
 :nth-of-type(2) {
  background-image: url('${window.location.origin}/img/background-duck.jpeg');
 }
 :nth-of-type(3) {
  background-image: url('${window.location.origin}/img/background-summer.jpeg');
 }
`

// CONTENTS
const SContents = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${media.lessThan("small")`
    width: 100%;
  `}
`
const SContentsLeft = styled(SContents)`
`
const SContentsRight = styled(SContents)`
  margin: 0 0 0 auto;
`
const SContentTitle = styled.p`
  width: fit-content;
  color: #000;
   font-weight: 700;
  margin: 18px auto 0 auto;
`
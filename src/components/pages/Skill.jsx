import React from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import { SkilCards } from '../organisms/skill/SkillCards';
import backgroundHeader from './img/cat.jpg'

const skills = [
  {
    title: 'ReactJSS',
    start: '2021/4',
    business: false,
    comment: 'The first framework I learnt , pretty easy and I am pretty fluent in this language',
  },
  {
    title: 'Node',
    start: '2021/4',
    business: true,
    comment: 'This goes along with ReactJS and React Native so I am pretty fluent with it',
  },
  {
    title: 'TailWindCss',
    start: '2023/05',
    business: true,
    comment: 'I learnt this when working for the company project , pretty easy to used , pretty useful and very nice UI framework',
  },
  {
    title: 'Python',
    start: '2021/09',
    business: true,
    comment: 'I first learnt this after ReactJS , it is the easiest language I learnt so far , I used Python in the project of professor to scrape websites and to clean data',
  },
  {
    title: 'C#-.NET',
    start: '2021/11',
    business: true,
    comment: 'I also learned this when working for the company , pretty similar to Java and C++ but I think it is better since it is developed by Microsoft and it have pretty much library to use',
  },
  {
    title: 'React Native',
    start: '2021/4',
    business: true,
    comment: 'It is pretty similar to ReactJS , I am surprised by the number of libraries it have - pretty much everything you need to build a website . I very like this framework , the process time is pretty good when goes with TailWind, however , when the project goes very huge , it is quite hard to debug but I think Redux my resolve the issue .Lots of people dont like it but I think it is pretty good. It is backed by Meta anyway so I dont think it is or will be bad',
  },
  {
    title: 'C/C++',
    start: '2022/09',
    business: false,
    comment: 'I dont remember exactly when I studied it , but I do remember studied it when I was studying for competitive programming and they also taught this at some CS courses I took at UBC. Compile time is the best however I dont really like it , I think it is pretty old, but undeniably, most of the current tech stack was built upon it.',
  },
  {
    title: 'Java',
    start: '2022/5',
    business: false,
    comment: 'They also taught this at school . It is less complex than C++ , the code is pretty easy to understand. Otherwise , no comment =]]]',
  },

]

export const Skill = () => {
  return (
    <>
      <SContentContainer>
        <SHeader>
          <STitleContainer>
            <STitle>Skill</STitle>
            <SContent>[ ReactJS, Node, TailWindCSS, Python, React Native, .NET,C,C++,C#]</SContent>
          </STitleContainer>
        </SHeader>
        <SMainContainer>
          <SDetailTitle>Details</SDetailTitle>
          <SkilCards skills={skills}></SkilCards>
        </SMainContainer>
      </SContentContainer>
    </>
  );
}
const SMainContainer = styled.div`
  
  padding: 0 60px;
  ${media.lessThan("small")`
    padding: 0 30px;
  `}
`
const SDetailTitle = styled.h3`
  font-family: 'Noto Serif',serif;
  text-align: left;
  font-size: 24px;
  letter-spacing: .08em;
  padding: 40px 0 20px 0;
`

const SContentContainer = styled.div`
  width: 100%;
  height: auto;
`
const SHeader = styled.div`
  height: 300px;
  background-image: url(${backgroundHeader});
  background-size:  cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ::before {
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: ' ';
  }
`
const STitleContainer = styled.div`
  padding: 0 60px;
  display: flex;
  position: relative;
  ${media.lessThan("small")`
    display: block;
    padding: 0 30px;
  `}
`
const STitle = styled.h2`
  font-family: 'Noto Serif',serif;
  font-size: 24px;
  letter-spacing: .08em;
  width: 120px;
  color: #fff;
`
const SContent = styled.p`
  font-size: 13px;
  letter-spacing: .05em;
  line-height: 24px;
  color: #fff;
  min-width: 300px;
  width: fit-content;
  ${media.lessThan("small")`
    min-width: auto;
  `}
`
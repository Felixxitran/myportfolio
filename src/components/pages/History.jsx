import styled from "styled-components";
import media from "styled-media-query";
import { HistoryCard } from "../organisms/history/HistoryCard";

const step = [{
    title: 'Self-Studying',
    startDate: '2021/3',
    content:`I learnt fundamentals of Computer Pramming : variables , syntax, data types, flow control ...`,
  },
  {
    title: 'React JS , Node',
    startDate: '2021/ 07',
    content:`I studied about React JS, Node, Express and made some cool websites using these tech frames. I created a Discord bot, a sketchy portfolio website and a music website.`,
  },
  {
    title: 'First Internship at CodeLynx LTD.',
    startDate: '2022/02',
    content:`I got my first internship at CodeLynx , my main responsibillities were to R&D a time travel debugging tool for the company . We worked in a team of 3 , I got to learn kind a lot about different types of databases , pros and cons of different tech stacks like Haskelll , Elm or JavaScript ,I had to learnt how to work with Clojure and Elm with was kind annoying and tiresome :3 but after the internship , I were able to use documentation instead of Youtube to learn new tech stack  :33`,
  },
  {
    title: 'Assistant Research',
    startDate: '2022/5',
    content:`Professor Fahamah H.Fard let me joined in one of her projects about NLP . I got  to learn something new about NLP. I got to learn about scraping website, I scraped around 100 repositories on github that used R language for this project , I also learned to clean the data , and finetuned the CODEBERT model`,
  },
  {
    title: 'Self Studying Again :3',
    startDate: '2022/9',
    content:`Since I had bunch of free time ,I studied about Software Architect on roadmap.sh cause some famouse Tiktoker recommended it :3. I kinda learned bunch of things about Design Patterns , System Design , Threads , Cache, CAP Theorem,Locking,Sharding . I also learned some interesting thing about computer network in this time : Proxy , Protocol,VPN, NAT, DHCP,Cloud Computing....`,
  },
  {
    title: 'Software Developer at SEATECH Inc',
    startDate: '2022/11',
    content:`I got my first paid job as a Software Developer at Seatech, I had to learnt bunch of things about .NET and C# to work for the company. I was responsible for the integration of the database of the company to another platform required by customer . In summer 2023, I also worked in the project of a mobile app for the company. I was responsible for the FrontEnd of the app.We got this done in 3 months, the tech stack I used in this project was React Native and TailWind.`,
  },
]

export const History = () => {
  return (
    <>
      <STitle>My Journey :3</STitle>
      <SContainer>
        <HistoryCard step={step}></HistoryCard>
      </SContainer>
    </>
  );
}

const SContainer = styled.div`
  max-width: 1170px;
  padding: 0 0 0 32px;
  margin: 32px 0 64px;
  position: relative;
  ::before {
    content: '';
    display: inline-block;
    width: 2px;
    height: 105%;
    background: #fff;
    position: absolute;
    left: 30px;
  }

  ${media.greaterThan("large")`
    margin: 64px auto;
    padding: 0 32px;
    ::before {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
  `}
`
const STitle = styled.h2`
  margin: 0 0 0 70px;
  font-size: 24px;
  letter-spacing: .08em;
  color: #fff;
  font-family: "Noto Serif",serif;
  font-style: normal;
  font-weight: 400;
  ${media.greaterThan("large")`
    width: 100%;
    margin: 0;
    text-align: center;
  `}
`
import styled from 'styled-components';
import backgroundDesk from './img/background-totoro.jpeg'
import { HomeHeader } from '../organisms/home/HomeHeader';
import { HomeContact } from '../organisms/home/HomeContact';
import { HomeContents } from '../organisms/home/HomeContents';

const menus = [
  {
    type: "right",
    title:"Journey",
    url:"/history",
  },
  {
    type: "left",
    title:"Skills",
    url:"/skill",
  },
]


export const Home = () => {
  return (
    <>
    {/* タイトルと紹介文 */}
     <HomeHeader></HomeHeader>
     {/* メイン */}
      <SMainContainer>
        {/* <SHeaderImg src={backgroundDesk}/> */}
        {/* 各ページへのリンクコンテナ */}
        <HomeContents menus={menus}></HomeContents>
        {/* CONTACT */}
        <HomeContact></HomeContact>
      </SMainContainer>
    </>
  );
}

// MAIN
const SMainContainer = styled.div`
`
const SHeaderImg = styled.img`
  height: auto;
  max-height: 900px;
  overflow: hidden;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`
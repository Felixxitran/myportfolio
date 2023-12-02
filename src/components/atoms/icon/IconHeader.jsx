import styled from 'styled-components';
import media from "styled-media-query";
import { SA, SLi, SUl } from './IconCss';

export const IconHeader = () => {
  return (
    <>
      <SIcons>
        <SIconLink><a href='https://www.linkedin.com/in/felixxitran'target='_blank' rel="noreferrer"><i className="fab fa-linkedin white fa-lg"></i></a></SIconLink>
        <SIconLink><a href='https://github.com/Felixxitran'target='_blank' rel="noreferrer"><i className="fab fa-github white fa-lg"></i></a></SIconLink>
        {/* <SQiita href='https://qiita.com/chiuney'target='_blank' rel="noreferrer"> */}
        {/* </SQiita> */}
      </SIcons>
    </>
  );
}

const SQiita = styled(SA)`
  background: #fff;
  ${media.lessThan("medium")`
    margin: 6px 0 0 0px;
  `}
`
const SIcons = styled(SUl)`
  position: absolute;
  left: 0;
  width: 17px;
  height: 44px;
  ${media.lessThan("small")`
    display: none;
  `}
`
const SIconLink = styled(SLi)`
  ${media.lessThan("medium")`
    margin: 0 0 0 5px;
  `}
`

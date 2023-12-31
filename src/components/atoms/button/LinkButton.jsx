import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkButton = (props) => {
  return (
    <>
      <SLink to={props.url}>{props.children}</SLink>
    </>
  );
}
const SLink = styled(Link)`
  color: #000;
  text-decoration: none;
  display:block;
  margin: 16px auto 0 auto;
  width: fit-content;
  padding: 14px 28px;
  background-color: transparent;
  font-size: 11px;
  font-family: "Harmonia Sans",sans-serif;
  font-weight: 700;
  border: 2px solid #000;
  box-shadow: none;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background: #fff;
    opacity: .6;
    color: #000;
  }
`
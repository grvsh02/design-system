import styled from "@emotion/styled";
import css from "@emotion/css";
import {keyframes} from "@emotion/react";
import SearchNormal from "../icons/outline/SearchNormal";
import ArrowRight1 from "../icons/outline/ArrowRight1";

export const Container = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 5px;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 5px
  ${({ hover }) =>
    hover &&
    css`
      width: 30%;
      border: 2px solid #BDBDBD;

      @media (min-width: 668px) {
        width: 80%;
      }
    `}
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
  line-height: 30px;
  outline: 0;
  border: 0;
  font-size: 14px;
  border-radius: 20px;
  padding: 0 20px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  display: ${(props:any) => (props.showSearchInput ? "block" : "none")};
`;

/** icons */
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const IconCommonCss = css`
  height: 1.25rem;
  width: 1.25rem;
  fill: #00adb5;
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;

export const IconMagnifyingGlass = styled(SearchNormal)`
  ${IconCommonCss}
`;

export const IconRightArrow = styled(ArrowRight1)`
  ${IconCommonCss}
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    fill: #393e46;
  }
`;

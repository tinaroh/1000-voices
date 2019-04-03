import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  background-color: #3372bc;
  overflow: hidden;
  /* display: block; */
  /* justify-content: space-between; */
  align-items: center;
  /* padding: 1rem; */

  a {
    color: #ffffff;
    transition: color 0.2s ease;
    text-decoration: none;
    float: left;
    display: block;
    text-align: center;
    padding: 10px;

    &.menu {
      height: 25px;
      color: #ffffff;
      font-family: Futura;
      font-size: 18px;
      font-weight: bold;
      text-transform: uppercase;
    }

    &:hover {
      color: inherit;
    }

    ${MEDIA.IPAD`
    /* padding: 10px; */


      &:not(:first-child) {
        display: none;
      }
    `}
  }

  &.opened {
    position: relative;

    a {
      float: none;
      display: block;
      text-align: left;
    }
  }

  h1 {
    height: 42px;
    color: #ffffff;
    font-family: Futura;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -1.28px;
    line-height: 42px;

    &:hover {
      color: inherit;
    }
  }

  .fullTitle {
    ${MEDIA.IPAD`
      display: none;
    `}
  }

  .shortTitle {
    display: none;

    ${MEDIA.IPAD`
      display: block;
    `}
  }
`;

export const MenuButton = styled.span`
  display: none;

  ${MEDIA.IPAD`
    display: block;
    float: right;
    text-align: left;
    /* display: inline-block; */
    padding: 24px 16px;

    .opened & {
      position: absolute;
      right: 0;
      top: 0;
    }
  `}
`;

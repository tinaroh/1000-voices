import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    li {
      text-transform: uppercase;
      font-size: 1.3rem;
      height: 25px;
      color: #ffffff;
      font-family: Futura;
      font-size: 18px;
      font-weight: bold;
      line-height: 25px;
      & + li {
        margin-left: 2rem;
      }
    }

    ${MEDIA.IPAD`
      display: none;
    `}
  }
`;

export const ListItem = styled.li`
  padding-right: 2rem;
`;

export const MenuButton = styled.span`
  display: none;

  ${MEDIA.IPAD`
    display: block;
    float: right;
    text-align: left;
    padding: 24px 16px;

    .opened & {
        position: absolute;
        right: 0;
        top: 0;
    }
    `}
`;

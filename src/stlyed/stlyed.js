import styled, { css } from 'styled-components';

export const Header = styled.div`
      width: 100%;
      height: 50px;
      background-color: #1B2631;
      box-shadow:0 0 8px  #919191;
      display: flex;
`

export const Text = styled.div`
      font-family: 'kanit';
      ${props => props.numCount && css`
      color: #ff0000fd;
      font-weight: 800;
      line-height:0`
      }
      ${props => props.cart && css`
      font-weight: 700;
      font-size: 14px;
      padding-left: 2% !important;
      width: 60%;
      text-align: left;
      line-height: 4;`
      }
      ${props => props.logo && css`
      color:#fff;
      font-size: 2em;
      `
      }
`
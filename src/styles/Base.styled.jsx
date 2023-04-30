import { createGlobalStyle } from 'styled-components';

import Segment16Cwoff2 from "../assets/fonts/Segment16CBoldItalic.woff2";
import Segment16Cwoff from "../assets/fonts/Segment16CBoldItalic.woff";
import Segment16Cttf from "../assets/fonts/Segment16CBoldItalic.ttf";

export const BaseStyle = createGlobalStyle`
@font-face {
    font-family: 'Segment16C';
    src: url(${Segment16Cwoff2}) format('woff2'),
         url(${Segment16Cwoff}) format('woff'),
         url(${Segment16Cttf}) format('truetype');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

body {
  font-size: 1rem;
  line-height: 1.5;
  color: ${(props) => props.theme.bodyTextColor};
  background: ${(props) => props.theme.bodyBg};
}

body,
input,
textarea,
button {
  font-family: Poppins, Arial, Helvetica, sans-serif;
}

a,
input,
textarea,
button {
  transition: color ${(props) => props.theme.animationTime} ${(props) =>
  props.theme.animationType},
    background-color ${(props) => props.theme.animationTime} ${(props) =>
  props.theme.animationType},
    border-color ${(props) => props.theme.animationTime} ${(props) =>
  props.theme.animationType},
    opacity ${(props) => props.theme.animationTime} ${(props) =>
  props.theme.animationType},
    box-shadow ${(props) => props.theme.animationTime} ${(props) =>
  props.theme.animationType};
}`;

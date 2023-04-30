import { createGlobalStyle } from 'styled-components';

export const BaseStyle = createGlobalStyle`
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
  transition: color ${props => props.theme.animationTime} ${props => props.theme.animationType},
    background-color ${props => props.theme.animationTime} ${props => props.theme.animationType},
    border-color ${props => props.theme.animationTime} ${props => props.theme.animationType},
    opacity ${props => props.theme.animationTime} ${props => props.theme.animationType},
    box-shadow ${props => props.theme.animationTime} ${props => props.theme.animationType};
}`;

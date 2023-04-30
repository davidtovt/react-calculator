import { createGlobalStyle } from 'styled-components';

export const ResetStyle = createGlobalStyle`
*,
::after,
::before {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font-size: inherit;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;
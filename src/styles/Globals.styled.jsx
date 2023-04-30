import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
.d-flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}

.align-items-center {
  align-items: center;
}

.text-end {
  text-align: right;
}

.gap-bottom {
  margin-bottom: ${props => props.theme.gap};

  ${({ theme }) =>
    theme.skin === 'minimal' &&
    css`
      @media screen and (max-width: 400px) {
        margin-bottom: 0.25rem;
      }
    `}
}
`;
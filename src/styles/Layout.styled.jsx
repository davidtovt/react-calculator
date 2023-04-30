import { createGlobalStyle, css } from 'styled-components';

const createGridCols = () => {
  let result = '';

  for (let i = 1; i <= 5; i++) {
    result += `.grid-cols-${i} {
      grid-template-columns: repeat(${i}, minmax(0, 1fr));
    }`;
  }

  return result;
};

const createColSpans = () => {
  let result = '';

  for (let i = 1; i <= 5; i++) {
    result += `.col-span-${i} {
    grid-column: span ${i} / span ${i};
  }`;
  }

  return result;
};

export const LayoutStyle = createGlobalStyle`
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 5rem 0;
}

.container {
  max-width: 450px;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
}

.grid {
  display: grid;
  gap: ${(props) => props.theme.gap};

  ${({ theme }) =>
    theme.skin === 'minimal' &&
    css`
      @media screen and (max-width: 400px) {
        gap: 0.25rem;
      }
    `}
}

${createGridCols()}

${createColSpans()}`;

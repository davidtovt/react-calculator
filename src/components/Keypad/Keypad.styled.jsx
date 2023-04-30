import styled, { css } from 'styled-components';

export const UpperButtons = styled.div`
  ${({ theme }) =>
    theme.skin === 'default' &&
    css`
      margin-bottom: 1rem;
    `}

  ${({ theme }) =>
    theme.skin === 'minimal' &&
    css`
      margin-bottom: 2rem;
    `}

  ${({ theme }) =>
    theme.skin === 'retro' &&
    css`
      margin-bottom: 1rem;
    `}
`;

import styled, { css } from 'styled-components';

export const DisplayWrapper = styled.div`
  input {
    width: 100%;
    height: auto;
    padding: 0;
    border: 0;
    text-align: right;
    text-transform: uppercase;

    &:focus {
      outline: none;
    }
  }

  /**
   * Default
   */
  ${({ theme }) =>
    theme.skin === 'default' &&
    css`
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      padding: 0.25rem 1rem;
      background-color: rgba(255 255 255 / 40%);
      border-radius: ${(props) => props.theme.borderRadius};
    `}

  /**
   * Minimal
   */
  ${({ theme }) =>
    theme.skin === 'minimal' &&
    css`
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      padding: 0 .25rem;
      background: rgba(250 250 250 / 40%);
    `}

  /**
   * Retro
   */
  ${({ theme }) =>
    theme.skin === 'retro' &&
    css`
      position: relative;
      display: flex;
      flex-direction: column;
      margin: -1rem -1rem 1rem;
      padding: 2rem 1rem 1.5rem;
      background: #231e1b;
      border-top-left-radius: 0.625rem;
      border-top-right-radius: 0.625rem;
      border-bottom-right-radius: 30% 0.25rem;
      border-bottom-left-radius: 30% 0.25rem;
      box-shadow: inset 0 -5px 1px -3px rgba(255 255 255 / 20%),
        inset 0 5px 8px -3px rgba(255 255 255 / 10%),
        inset 0 4px 1px -2px rgba(255 255 255 / 5%);
    `}
`;

export const Memory = styled.div`
  /**
   * Default
   */
  ${({ theme }) =>
    theme.skin === 'default' &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      padding-top: 0.25rem;
      padding-bottom: 0.375rem;
      font-size: ${(props) => props.theme.fontSizeSm};
      border-bottom: 1px solid ${(props) => props.theme.borderColor};
      opacity: 0.5;
    `}

  /**
   * Minimal
   */
  ${({ theme }) =>
    theme.skin === 'minimal' &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      font-size: ${(props) => props.theme.fontSizeSm};
      opacity: 0.4;
    `}

  /**
   * Retro
   */
  ${({ theme }) =>
    theme.skin === 'retro' &&
    css`
      display: none;
    `}
`;

export const MemorySing = styled.div`
   /**
   * Default
   */
  ${({ theme }) =>
    theme.skin === 'default' &&
    css`
      display: none;
    `}
  
  /**
   * Minimal
   */
  ${({ theme }) =>
    theme.skin === 'minimal' &&
    css`
      display: none;
    `}
    
  /**
   * Retro
   */
  ${({ theme }) =>
    theme.skin === 'retro' &&
    css`
      position: absolute;
      top: 55%;
      left: 1.5rem;
      color: #1b1419;
      transform: translate(0, -50%);
    `}
`;

export const EquationInput = styled.input`
  /**
   * Default
   */
  ${({ theme }) =>
    theme.skin === 'default' &&
    css`
      font-size: ${(props) => props.theme.fontSizeSm};
      color: inherit;
      background: transparent;
      opacity: 0.8;
    `}

  /**
   * Minimal
   */
  ${({ theme }) =>
    theme.skin === 'minimal' &&
    css`
      color: inherit;
      background: transparent;
    `}
    
  /**
   * Retro
   */
  ${({ theme }) =>
    theme.skin === 'retro' &&
    css`
      display: none;
    `}
`;

export const NumberInput = styled.input`
  &::placeholder {
    color: inherit;
  }

  /**
   * Default
   */
  ${({ theme }) =>
    theme.skin === 'default' &&
    css`
      font-size: ${(props) => props.theme.fontSizeLg};
      line-height: 1;
      color: inherit;
      background: transparent;
    `}

  /**
   * Minimal
   */
  ${({ theme }) =>
    theme.skin === 'minimal' &&
    css`
      font-size: ${(props) => props.theme.fontSizeLg};
      font-weight: 700;
      line-height: 1;
      color: inherit;
      background: transparent;
    `}

  /**
   * Retro
   */
  ${({ theme }) =>
    theme.skin === 'retro' &&
    css`
      padding: 1rem 1rem .25rem 2rem !important;
      font-size: ${(props) => props.theme.fontSizeLg};
      line-height: 1;
      letter-spacing: -0.0125em;
      font-family: Segment16C;
      border-radius: 0.25rem;
      color: #1b1419;
      background: #c9d8c5;
      text-shadow: 2px 2px 0 rgba(0 0 0 / 10%);
      box-shadow: inset 0 4px 3px rgba(0 0 0 / 70%);
    `}
`;

import styled, { css } from 'styled-components';

export const Btn = styled.button`
  display: flex;
  width: 100%;
  cursor: pointer;
  user-select: none;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  ${(props) =>
    props.group === 'digit' &&
    css`
      text-transform: uppercase;
    `}

  /**
   * Default
   */
  ${({ theme }) =>
    theme.skin === 'default' &&
    css`
      height: 3rem;
      border: 1px solid rgba(0 0 0 / 10%);
      color: ${(props) => props.theme.calculatorTextColor};
      background: rgba(255 255 255 / 70%);
      opacity: 0.7;
      border-radius: ${(props) => props.theme.borderRadius};
      box-shadow: 1px 1px 1px rgba(0 0 0 / 3%);

      &:not(:disabled):hover {
        background: #f2f8fa;
        box-shadow: 1px 1px 3px rgba(0 0 0 / 8%);
      }

      &:not(:disabled):active {
        background: #eaf4fa;
        box-shadow: 0 0 1px rgba(0 0 0 / 5%);
      }

      &:disabled {
        cursor: default;
        color: #242e41;
        opacity: 0.3;
      }

      ${(props) =>
        props.group === 'digit' &&
        css`
          opacity: 1;
        `}

      ${(props) =>
        props.equal &&
        css`
          color: #fff;
          background-color: #24bbfb;

          &:not(:disabled):hover {
            background-color: #1fa8e2;
          }

          &:not(:disabled):active {
            background-color: #3fbbf0;
          }
        `}
    `}

  /**
   * Minimal
   */
  ${({ theme }) =>
    theme.skin === 'minimal' &&
    css`
      position: relative;
      border: 0;
      color: ${(props) => props.theme.calculatorTextColor};
      background: rgba(0 0 0 / 5%);
      opacity: 0.7;
      border-radius: 100%;

      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &:after {
        display: block;
        content: '';
        padding-bottom: 100%;
      }

      &:not(:disabled):hover {
        background: rgba(0 0 0 / 8%);
      }

      &:not(:disabled):active {
        background: rgba(0 0 0 / 6%);
      }

      &:disabled {
        cursor: default;
        opacity: 0.25;
      }

      ${(props) =>
        props.group === 'digit' &&
        css`
          opacity: 1;
        `}

      ${(props) =>
        props.equal &&
        css`
          color: #fff;
          background-color: #111;
          opacity: 1;

          &:not(:disabled):hover {
            background-color: #09dfff;
          }

          &:not(:disabled):active {
            background-color: #0cceeb;
          }
        `}
    `}

  /**
   * Retro
   */
  ${({ theme }) =>
    theme.skin === 'retro' &&
    css`
      height: 3rem;
      border: 3px solid #160e0b;
      font-size: 1.375rem;
      color: ${(props) => props.theme.calculatorTextColor};
      background: linear-gradient(to right, #302929 0%, #423839 100%);
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 40% 0.875rem;
      border-bottom-left-radius: 40% 0.875rem;
      text-shadow: 1px 1px 1px rgba(0 0 0 / 50%);
      box-shadow: inset 0 2px 3px -2px rgba(255 255 255 / 70%),
        inset 0 -2px 3px -2px rgba(255 255 255 / 20%),
        0 2px 3px rgba(0 0 0 / 40%);

      ${(props) =>
        props.group === 'digit' &&
        css`
          background: linear-gradient(to right, #5e5450 0%, #685d5b 100%);
        `}

      ${(props) =>
        props.group === 'clear' &&
        css`
          text-shadow: 1px 1px 1px rgba(0 0 0 / 20%);
          background: linear-gradient(to right, #c94d6e 0%, #ec5b80 100%);
        `}

      &:disabled {
        cursor: not-allowed;
      }

      &:disabled,
      &:active {
        border-width: 3px 3px 2px;
        color: rgba(255 255 255 / 80%);
        box-shadow: inset 0 2px 3px -2px rgba(0 0 0 / 30%),
          inset 0 10px 20px -4px rgba(0 0 0 / 30%),
          0 1px 2px rgba(0 0 0 / 30%);
      }
    `}
`;

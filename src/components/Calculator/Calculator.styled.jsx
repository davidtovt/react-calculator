import styled, { css } from 'styled-components';

export const CalculatorWrapper = styled.div`
  position: relative;
  overflow: hidden;
  color: ${(props) => props.theme.calculatorTextColor};

  > * {
    position: relative;
    z-index: 1;
  }

  ${({ theme }) =>
    theme.skin === 'default' &&
    css`
      padding: 1rem;
      border: 1px solid rgba(0 0 0 / 4%);
      background: #eaf4fa;
      border-radius: ${(props) => props.theme.borderRadiusLg};
    `}

  ${({ theme }) =>
    theme.skin === 'minimal' &&
    css`
      padding: 1.5rem;
      background: #fafafa;
      border-radius: ${(props) => props.theme.borderRadiusLg};

      @media screen and (max-width: 400px) {
        padding: 1rem;
      }
    `}

  ${({ theme }) =>
    theme.skin === 'retro' &&
    css`
      padding: 1rem 1rem 2rem;
      background: linear-gradient(45deg, #d3c9ca 0%, #dfdad7 100%);
      border-top-left-radius: 0.75rem;
      border-top-right-radius: 0.75rem;
      border-bottom-right-radius: 30% 2rem;
      border-bottom-left-radius: 30% 2rem;
      box-shadow: inset 0 0 15px rgba(0 0 0 / 50%),
        inset 0 0 4px rgba(0 0 0 / 80%), 10px 10px 15px rgba(0 0 0 / 30%),
        0px 6px 3px 3px rgba(0 0 0 / 20%), 3px 3px 5px rgba(0 0 0 / 50%);
    `}
`;

export const Shadow = styled.div`
  ${({ theme }) =>
    theme.skin === 'minimal' &&
    css`
      position: absolute;
      z-index: 0;
      top: 50%;
      left: 50%;
      width: 200px;
      height: 200px;
      background: #24bbfb;
      transform: translate(-50%, -50%);
      border-radius: 100%;
      filter: blur(100px);
      opacity: 0.4;
    `}
`;

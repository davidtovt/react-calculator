import styled, { css } from 'styled-components';

export const CalculatorWrapper = styled.div`
  color: ${(props) => props.theme.calculatorTextColor};

  ${({ theme }) =>
    theme.skin === 'default' &&
    css`
      padding: 1rem;
      border: 1px solid rgba(0 0 0 / 4%);
      background: #eaf4fa;
      border-radius: ${(props) => props.theme.borderRadiusLg};
      box-shadow: 0 0 5rem rgba(255 255 255 / 80%);
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
      border-top-left-radius: .75rem;
      border-top-right-radius: .75rem;
      border-bottom-right-radius: 30% 2rem;
      border-bottom-left-radius: 30% 2rem;
      box-shadow:
        inset 0 0 15px rgba(0 0 0 / 50%),
        inset 0 0 4px rgba(0 0 0 / 80%),
        10px 10px 15px rgba(0 0 0 / 30%),
        0px 6px 3px 3px rgba(0 0 0 / 20%),
        3px 3px 5px rgba(0 0 0 / 50%);
    `}
`;

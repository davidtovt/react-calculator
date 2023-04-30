import styled, { css } from 'styled-components';

export const SwitcherWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  user-select: none;

  label {
    display: block;
    cursor: pointer;
  }

   input {
      position: absolute;
      visibility: hidden;
      overflow: hidden;
      width: 1px;
      height: 1px;
      opacity: 0;
    }

  ${({ theme }) =>
    theme.skin === 'default' &&
    css`
      height: 2.75rem;
      padding: 2px;
      font-size: ${(props) => props.theme.fontSizeSm};
      border-radius: ${(props) => props.theme.borderRadius};

      label {
        flex: 1 0 0;
      }

      input {
        &:checked + span {
          background: #f6fafd;
          border-color: rgba(36, 46, 65, 0.07);
          opacity: 1;
        }
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        border: 1px solid transparent;
        border-radius: ${(props) => props.theme.borderRadius};
        opacity: 0.5;
      }
    `}

  ${({ theme }) =>
    theme.skin === 'minimal' &&
    css`
      justify-content: space-between;
      height: 2rem;
      font-size: .6875rem;

      label {
        width: 2rem;
      }

      input {
        &:checked + span {
          color: #fff;
          background-color: #111;
          opacity: 1;
        }
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        border: 1px solid transparent;
        border-radius: 100%;
        opacity: 0.5;
      }
    `}

    ${({ theme }) =>
    theme.skin === 'retro' &&
    css`
      text-align: center;
      font-size: .75rem;
      font-weight: 700;
      color: #171518;

      label {
        flex: 1 0 0;

        &:first-child span span {
          border-radius: 3px 0 0 3px;
        }

        &:last-child span span {
          border-radius: 0 3px 3px 0;
        }
      }

      input {
        &:checked + span span:after {
          position: absolute;
          content: "";
          top: -4px;
          left: 50%;
          bottom: -4px;
          width: 16px;
          background: linear-gradient(to bottom, #4d4c4e 0%, #373638 100%);
          border-radius: 4px;
          transform: translate(-50%, 0);
          box-shadow:
            inset 0 1px 3px 0px rgba(255 255 255 / 40%),
            inset 0 -1px 2px 0px rgba(255 255 255 / 20%),
            0 2px 3px rgba(0 0 0 / 30%);
        }
      }

      span {
        span {
          position: relative;
          display: block;
          height: 8px;
          width: 100%;
          margin-top: .25rem;
          background: #171518;
        }
      }
    `}
`;

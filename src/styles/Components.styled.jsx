import styled from 'styled-components';

export const ListLinkStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style-type: none;

  li {
    margin-right: 1.5rem;

    &:last-child {
      margin-right: 0;
    }

    a,
    button {
      display: block;
      padding: 0;
      border: 0;
      color: inherit;
      background: transparent;
      cursor: pointer;
      opacity: 0.4;

      &:hover {
        opacity: 0.8;
      }

      &:disabled,
      &.disabled {
        opacity: 1;
        cursor: default;
      }
    }
  }
`;

import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme.headerTextColor};
  background-color: ${(props) => props.theme.headerBg};
  backdrop-filter: blur(1rem);
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
`;

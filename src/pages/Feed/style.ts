import styled from 'styled-components';

export const Feed = styled.div`
  position: absolute;
  top: 80px;
  bottom: 50px;
  left: 0;
  right: 0;
  padding: 0 17px;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

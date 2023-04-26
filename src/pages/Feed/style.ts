import styled from 'styled-components';

export const Feed = styled.div`
  position: absolute;
  top: 80px;
  bottom: 50px;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

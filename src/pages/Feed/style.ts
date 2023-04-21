import styled from 'styled-components';

export const Feed = styled.div`
  height: 570px;
  position: relative;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

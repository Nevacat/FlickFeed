import styled from 'styled-components';

export const Feed = styled.div`
  /* height: 600px; */
  position: absolute;
  top: 80px;
  bottom: 50px;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

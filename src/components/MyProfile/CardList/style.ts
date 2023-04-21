import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 270px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardList = styled.ol`
  display: grid;
  width: 100%;
  padding-bottom: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`;

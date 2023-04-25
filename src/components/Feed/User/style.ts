import styled from 'styled-components';

export const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.small};
  margin: 8px 0;
`;

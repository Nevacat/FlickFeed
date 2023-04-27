import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 6rem;
  height: 6rem;
  transform: translate(-50%, -50%);

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-radius: 50%;
    border: 5px solid grey;
    border-top-color: ${({ theme }) => theme.color.lightPurple};
    animation: ${spinner} 0.3s linear infinite;
  }
`;

import styled from 'styled-components';

export const UserPostModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 670px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 40.9px;
  overflow: hidden;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const UserPostModal = styled.div`
  width: 300px;
  height: 200px;
`;

export const UserPostModalImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

import styled from 'styled-components';

export const UserPostModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 39%;
  height: 97%;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 40.9px;
  overflow: hidden;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const UserPostModal = styled.div`
  width: 80%;
  height: 30%;
`;

export const UserPostModalImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

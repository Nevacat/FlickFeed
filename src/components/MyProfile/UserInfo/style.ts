import styled from 'styled-components';

export const UserInfo = styled.div`
  position: relative;
  bottom: 50px;
  width: 170px;
  margin: 0 auto;
  text-align: center;
`;

export const Image = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  margin-bottom: 12px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Name = styled.strong`
  display: block;
  margin-bottom: 8px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const StatusMessage = styled.p`
  margin-bottom: 18px;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const EditButton = styled.button`
  width: 100%;
  padding: 6px 0;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.skyblue};
  border: none;
  border-radius: 4px;
  outline: none;
`;

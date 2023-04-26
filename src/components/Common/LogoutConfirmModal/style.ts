import styled from 'styled-components';

export const LogoutModal = styled.aside`
  position: absolute;
  top: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Message = styled.p`
  margin-bottom: 40px;
`;

export const DefaultButton = styled.button`
  width: 80px;
  padding: 6px 12px;
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
`;

export const LogoutButton = styled(DefaultButton)`
  width: 80px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.color.skyblue};
`;

export const CancelButton = styled(DefaultButton)`
  background-color: ${({ theme }) => theme.color.gray};
`;

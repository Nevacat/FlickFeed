import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: absolute;
  top: 30px;
  left: 20px;
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.color.gray};
  opacity: 0.8;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.gray};
  opacity: 0.8;
`;

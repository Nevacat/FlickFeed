import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: absolute;
  top: 30px;
  left: 20px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  z-index: 10;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  opacity: 0.8;
`;

export const Button = styled(StyledLink)`
  outline: none;
  border: none;
`;

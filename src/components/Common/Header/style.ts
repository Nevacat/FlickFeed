import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: absolute;
  top: 25px;
  left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 52px;
  z-index: 10;
`;

export const Logo = styled.div`
  display: ${({ location }: any) =>
    location.pathname === '/myProfile' ? 'none' : 'block'};
  flex-grow: 1;
  transform: scale(0.5);
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: ${({ theme }) => theme.color.navy};
  font-size: 20px;
`;

export const BackButton = styled(StyledLink)`
  display: ${({ location }: any) =>
    location.pathname === '/myProfile' ? 'flex' : 'none'};
  outline: none;
  border: none;
`;

export const LogoutButton = styled.button`
  display: ${({ location }: any) =>
    location.pathname === '/' ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  font-size: 20px;
  color: ${({ theme }) => theme.color.navy};
  background-color: transparent;
`;

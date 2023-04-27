import styled from 'styled-components';

interface IHeader {
  location: { pathname: string };
}

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

export const Logo = styled.div<IHeader>`
  display: ${({ location }: any) => (location.pathname === '/myProfile' ? 'none' : 'block')};
  flex-grow: 1;
  transform: scale(0.5);
  height: 100%;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  color: ${({ theme }) => theme.color.navy};
  font-size: 20px;
`;

export const BackButton = styled(StyledLink)`
  display: ${({ location }: IHeader) =>
    location.pathname === '/myProfile' || location.pathname === '/createPost' ? 'flex' : 'none'};
  outline: none;
  border: none;
`;

export const LogoutButton = styled.button<IHeader>`
  display: ${({ location }: any) => (location.pathname === '/posts' ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  font-size: 20px;
  color: ${({ theme }) => theme.color.navy};
  background-color: transparent;
  padding: 1px 8px;
`;

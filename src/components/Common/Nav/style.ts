import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Gnb = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom-left-radius: 40.9px;
  border-bottom-right-radius: 40.9px;
  overflow: hidden;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
  color: ${({ theme }) => theme.color.navy};
  border-top: 1px solid ${({ theme }) => theme.color.gray};

  &:active {
    opacity: 0.7;
  }

  img {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;

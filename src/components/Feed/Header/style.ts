import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { RxCrossCircled } from 'react-icons/rx';

export const Header = styled.header`
  position: absolute;
  top: 30px;
  left: 20px;
  display: flex;
  justify-content: space-between;
  width: 90%;
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

export const StyledAiFillGithub = styled(AiFillGithub)`
  outline: none;
  border: none;
  width: 36px;
  height: 36px;
`;

export const StyledRxCrossCircled = styled(RxCrossCircled)`
  outline: none;
  border: none;
  width: 36px;
  height: 36px;
`;

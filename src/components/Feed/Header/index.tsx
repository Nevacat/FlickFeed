import React from 'react';
import { StyledRxCrossCircled, StyledAiFillGithub } from './style';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { StyledLink } from './style';

function Header() {
  const navigate = useNavigate();

  return (
    <S.Header>
      <StyledRxCrossCircled />
      <StyledLink to='https://github.com/Nevacat/FlickFeed'>
        <StyledAiFillGithub />
      </StyledLink>
    </S.Header>
  );
}

export default Header;

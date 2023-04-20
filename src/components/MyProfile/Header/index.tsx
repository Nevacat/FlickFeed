import React from 'react';
import { VscChevronLeft } from 'react-icons/vsc';
import { AiFillGithub } from 'react-icons/ai';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

function index() {
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.Button onClick={() => navigate(-1)}>
        <VscChevronLeft />
      </S.Button>

      <S.StyledLink to="https://github.com/Nevacat/FlickFeed">
        <AiFillGithub />
      </S.StyledLink>
    </S.Header>
  );
}

export default index;

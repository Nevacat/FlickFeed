import React, { useState } from 'react';
import { VscChevronLeft } from 'react-icons/vsc';
import { AiFillGithub } from 'react-icons/ai';
import * as S from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import LogoutConfirmModal from '../LogoutConfirmModal';

function index() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const logoutHandler = async () => {
    setIsLogoutModalOpen(true);
  };

  return (
    <S.Header>
      <S.BackButton location={location} onClick={() => navigate(-1)}>
        <VscChevronLeft />
      </S.BackButton>
      <S.LogoutButton location={location} onClick={logoutHandler}>
        <BiLogOut />
      </S.LogoutButton>

      {isLogoutModalOpen && (
        <LogoutConfirmModal setIsLogoutModalOpen={setIsLogoutModalOpen} />
      )}

      <S.Logo location={location}>
        <S.Img src="images/FlickFeed.png" alt="FilckFeed" />
      </S.Logo>

      <S.StyledLink href="https://github.com/Nevacat/FlickFeed">
        <AiFillGithub />
      </S.StyledLink>
    </S.Header>
  );
}

export default index;

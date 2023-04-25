import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useMutation } from 'react-query';
import UserInfoModal from '../UserInfoModal';
import { getUser } from '../../../api/data';

function index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate, data: user } = useMutation(getUser);

  useEffect(() => {
    mutate();
  }, []);

  return (
    <S.UserInfo>
      <S.Image>
        <img
          src={
            user?.user.userImg
              ? user?.user.userImg
              : 'images/profile_background.jpg'
          }
          alt={user?.username}
        />
      </S.Image>
      <S.Name>{user?.user.username}</S.Name>
      <S.StatusMessage>{user?.user.userInfo}</S.StatusMessage>

      <S.EditButton type="button" onClick={() => setIsModalOpen(!isModalOpen)}>
        프로필 편집
      </S.EditButton>

      {isModalOpen && (
        <UserInfoModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          user={user}
        />
      )}
    </S.UserInfo>
  );
}

export default index;

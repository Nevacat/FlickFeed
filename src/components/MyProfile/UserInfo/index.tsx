import React from 'react';
import * as S from './style';
import axios from 'axios';
import { useQuery } from 'react-query';

function index({ isModalOpen, setIsModalOpen }: any) {
  const getUser = async () => {
    const response = await axios({
      method: 'POST',
      url: '/auth/me',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJhbGljZSIsImVtYWlsIjoidGVzdEBuYXZlci5jb20iLCJpYXQiOjE2ODE1MzY5MzAsImV4cCI6MTY4MTU0MDUzMH0.s0km3UHRLyTh8pR2sKxludFTbmRH_nNvvp0x_kDxpVI',
      },
    });
    return response.data;
  };

  const { data: user } = useQuery(['user'], getUser, {
    onSuccess: (user) => {
      console.log(user);
    },
  });

  return (
    <S.UserInfo>
      <S.Image>
        <img
          src={
            user?.userImage ? user?.userImage : 'images/profile_background.jpg'
          }
          alt={user?.username}
        />
      </S.Image>
      <S.Name>{user?.username}</S.Name>
      <S.StatusMessage>{user?.userInfo}</S.StatusMessage>

      <S.EditButton type="button" onClick={() => setIsModalOpen(!isModalOpen)}>
        프로필 편집
      </S.EditButton>
    </S.UserInfo>
  );
}

export default index;

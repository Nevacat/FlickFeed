import React, { useState } from 'react';
import {
  Background,
  UserInfo,
  CardList,
  Header,
  Modal,
} from '../../components/MyProfile/';
import axios from 'axios';
import { useQuery } from 'react-query';

function MyProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <main style={{ position: 'relative' }}>
      <Header />
      <Background />
      <UserInfo isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Modal
        user={user}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <CardList />
    </main>
  );
}

export default MyProfile;

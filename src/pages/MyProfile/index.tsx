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
  return (
    <main style={{ position: 'relative' }}>
      <Header />
      <Background />
      <UserInfo />
    </main>
  );
}

export default MyProfile;

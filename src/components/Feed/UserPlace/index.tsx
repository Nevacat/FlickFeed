import React, { useState } from 'react';
import * as S from './style';
import styled from 'styled-components';
import Modal from '../Modal';
import { useQuery } from 'react-query';
import axios from 'axios';
import { StyledEditBtn } from './style';
function UserPlace({ username, post }) {
  const [modal, setModal] = useState(false);
  return (
    <S.UserPlace>
      <div>
        {' '}
        <h1 style={{ color: '#45537c' }}>{post.author.username}</h1>
        <h1 style={{ color: '#B3B6C4', fontSize: '10px' }}>
          {post.place}
        </h1>{' '}
      </div>

      <StyledEditBtn
        onClick={() => {
          setModal(!modal);
        }}
      />
    </S.UserPlace>
  );
}

export default UserPlace;

import React from 'react';
import * as S from './style';
import { getUsers } from '../../../api/data';
function UserImg({ size, url }: any) {
  return <S.UserImg size={size} style={{ backgroundImage: `url(${url})` }} />;
}

export default UserImg;

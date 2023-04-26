import React from 'react';
import * as S from './style';

export interface UserImgProps {
  size?: 'small';
  url?: string;
}

function UserImg({ size, url }: UserImgProps) {
  return <S.UserImg size={size} url={url} />;
}

export default UserImg;

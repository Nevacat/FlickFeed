import React from 'react';
import * as S from './style';
import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

function Like() {
  const [like, setLike] = useState(0);
  return (
    <S.Like>
      <LikeBtn
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {' '}
      </LikeBtn>{' '}
      <span style={{ color: 'red' }}>{like}</span>likes{' '}
    </S.Like>
  );
}

export default Like;

const LikeBtn = styled(AiOutlineHeart)`
  width: 25px;
  height: 25px;
`;

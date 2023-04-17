import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import User from '../User';
import UserImg from '../UserImg';
import * as S from './style';
function UsersWrap() {
  const [swiper, setSwiper] = useState(null);
  const initSwiper = useRef();
  return (
    <S.UsersWrap>
      <div className='swiper-container' ref={initSwiper}>
        <User />
      </div>
    </S.UsersWrap>
  );
}

export default UsersWrap;

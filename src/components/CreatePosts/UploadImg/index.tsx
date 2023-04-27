import React, { useEffect, useState } from 'react';
import * as S from './style';
import { BackgroundImage } from '../../MyProfile/Background/style';

function UploadImg({setPost}:any) {
  const [previewImg, setPreviewImg] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    // const value = e.target.value;
    
    setPost((prev:any) => ({...prev, postImg: file}))

    if(previewImg) URL.revokeObjectURL(previewImg)

    const previewURL = URL.createObjectURL(file!)
    
    setPreviewImg(previewURL)
  };

  useEffect(()=>{
    return () => {
      if(previewImg) URL.revokeObjectURL(previewImg)
    }
  },[])

  return (
    <S.Box>
      <S.Preview backgroundImage={previewImg}>
        <S.ImgIcon display={!previewImg ? 'block' : 'none'} />
      </S.Preview>
      <label htmlFor="file">
        <S.UploadOption>
          <S.AddIcon />
          <S.Input type="file" id="file" onChange={onChange} />
        </S.UploadOption>
      </label>
    </S.Box>
  );
}

export default UploadImg;

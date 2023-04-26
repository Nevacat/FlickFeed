import React, { useState } from 'react'
import { UseMutateFunction } from 'react-query'
import { AuthResponse, LoginRequest , RegisterRequest} from '../../interface/auth'
import { AxiosError } from 'axios'
import { getCookie} from '../../utils/cookies'
import { ContainerStyle, EmailStyle, PwStyle, UsernameStyle, SignupStyle, Signup, ImgStyle, Warning, PasswordConfirm, FileSubmit, StatusStyle, Lab, SpanEl} from './style'
import { useNavigate } from 'react-router-dom'
import {memo, useMemo} from "react"

export interface RegisterFormProps {
  mutate: UseMutateFunction<AuthResponse | undefined, AxiosError<unknown, any>, RegisterRequest>
}

function RegisterForm({ mutate }: RegisterFormProps) {
  const navigate = useNavigate()

  const [imageUrl, setImageUrl] = useState<string>('')

  const [userImg, setUserImg] = useState<File | null>(null)
  const [userInput, setUserInput] = useState<RegisterRequest>({ email: '', password: '' , username:'', passwordConfirm: '',userImg: null , userInfo:''})
  
  const formData = useMemo(() => {
    const data = new FormData();
    data.append("email", userInput.email);
    data.append("password", userInput.password);
    data.append("username", userInput.username);
    if (userInput.userInfo) {
      data.append("userinfo", userInput.userInfo);
    }
    if (userInput.userImg) {
      data.append("userimg", userInput.userImg);
    }
    return data;
  }, [userInput]);
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if(userInput.password == userInput.passwordConfirm){
      e.preventDefault()
      mutate(userInput)
      alert("All Signed Up!")
      setUserInput({email: '', password: '', username: '', passwordConfirm: '', userImg: null, userInfo: ''})
      navigate("/login")
    }else{
      alert("비밀번호를 확인해주세요!")
    }
  }
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setUserInput(prevState => ({
      ...prevState,
      userImg: file || null
    }))
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setImageUrl(reader.result as string)
      }
    }
  }

  return (
    <ContainerStyle onSubmit={onSubmit} className="container" >
      <Signup>Sign up for Flick Feed</Signup>

      <ImgStyle src={imageUrl || 'https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg'} />

      <div>
      <EmailStyle name="email" type="email" value={userInput.email} onChange={onChange} className="email" placeholder="이메일" required/>
      </div>
      <div>
      <PwStyle name="password" type="password" value={userInput.password} onChange={onChange} className="password" placeholder="비밀번호(8자리 이상)" pattern=".{8,}" required/>
      </div>
      <div>
        <PasswordConfirm name="passwordConfirm" type="password" value={userInput.passwordConfirm} onChange={onChange} className="passwordConfirm" placeholder="비밀번호 확인" pattern=".{8,}" required/>
      </div>
      <div>
        <UsernameStyle type="text" name="username" placeholder="유저네임" value={userInput.username} onChange={onChange} className="username" required/>
      </div>
      <div>
        <StatusStyle type="text" name="userInfo" placeholder="상태메시지" value={userInput.userInfo} onChange={onChange}/>
      </div>
      <div>
        <Lab htmlFor="imageInput">
         <SpanEl>(프로필 사진)</SpanEl>
        <FileSubmit type="file" accept="image/*" onChange={handleFileSelect} />
        </Lab>
      </div>
      <SignupStyle type="submit" className="signUp">회원가입</SignupStyle>
      <Warning>Get started for free. No spam of affiliate links</Warning>
    </ContainerStyle>
  )
}

export default RegisterForm
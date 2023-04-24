import React, { useState } from 'react'
import { UseMutateFunction } from 'react-query'
import { AuthResponse, LoginRequest } from '../../interface/auth'
import { AxiosError } from 'axios'
import { getCookie} from '../../utils/cookies'
import {ContainerStyle, EmailStyle, PwStyle, LoginStyle, Signin, First, Neww, ImgStyle} from "./style.ts"
import { useNavigate } from 'react-router-dom'

export interface LoginFormProps {
  mutate: UseMutateFunction<AuthResponse | undefined, AxiosError<unknown, any>, LoginRequest>
}

function LoginForm({ mutate }: LoginFormProps) {
  const navigate = useNavigate()
  const [userInput, setUserInput] = useState<LoginRequest>({ email: '', password: '' })
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(userInput)
    console.log(userInput)
    setUserInput({email: '', password: ''})
  }

  const toSignUp = () => {
    navigate("/register")
  }
  return (
    <ContainerStyle onSubmit={onSubmit} className="container">
      <Signin>Log in to Flick Feed</Signin>
      <ImgStyle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREv2iK0rk8t7xPQQx_G-SKoUNao4VpV5ywoF6VdVJZZQ&s"  />
      <div>
      <EmailStyle name="email" type="email" value={userInput.email} onChange={onChange} className="email" placeholder="이메일"/>
      </div>
      <div>
      <PwStyle name="password" type="password" value={userInput.password} onChange={onChange} className="password" placeholder="비밀번호" />
      </div>
      <LoginStyle type="submit" className="login">로그인</LoginStyle>
      <First>처음이신가요? <Neww onClick={toSignUp}>회원가입</Neww></First>
    </ContainerStyle>
  )
}

export default LoginForm

import React, { useState } from 'react'
import { UseMutateFunction } from 'react-query'
import { AuthResponse, LoginRequest , RegisterRequest} from '../../interface/auth'
import { AxiosError } from 'axios'
import { getCookie} from '../../utils/cookies'
import { ContainerStyle, EmailStyle, PwStyle, UsernameStyle, SignupStyle, Signup, ImgStyle, Warning} from './style'
import { useNavigate } from 'react-router-dom'

export interface RegisterFormProps {
  mutate: UseMutateFunction<AuthResponse | undefined, AxiosError<unknown, any>, RegisterRequest>
}

function RegisterForm({ mutate }: RegisterFormProps) {
  let navigate = useNavigate()
  const [userInput, setUserInput] = useState<RegisterRequest>({ email: '', password: '' , username:''})
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(userInput)
    console.log(userInput)
    alert("All Signed Up!")
    setUserInput({email: '', password: '', username: ''})
    navigate("/login")

  }


  return (
    <ContainerStyle onSubmit={onSubmit} className="container" >
      <Signup>Sign up for Flick Feed</Signup>
      <ImgStyle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREv2iK0rk8t7xPQQx_G-SKoUNao4VpV5ywoF6VdVJZZQ&s"/>
      <div>
      <EmailStyle name="email" type="email" value={userInput.email} onChange={onChange} className="email" placeholder="이메일"/>
      </div>
      <div>
      <PwStyle name="password" type="password" value={userInput.password} onChange={onChange} className="password" placeholder="비밀번호"/>
      </div>
      <div>
        <UsernameStyle type="text" name="username" placeholder="유저네임" value={userInput.username} onChange={onChange} className="username" />
      </div>
      <SignupStyle type="submit" className="signUp">회원가입</SignupStyle>
      <Warning>Get started for free. No spam of affiliate links</Warning>
    </ContainerStyle>
  )
}

export default RegisterForm
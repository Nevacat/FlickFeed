import React from "react"
import LoginForm from "../../components/Login/LoginForm"
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { login } from '../../api/authService'
import { setCookie, getCookie} from '../../utils/cookies'
import { AxiosError } from 'axios'


function LoginPage(){
    const navigate = useNavigate();
    const { mutate } = useMutation(login, {
      onSuccess: (data) => {
        if (data) {
          setCookie('accessToken', data.accessToken)
          navigate("/posts")
        }
      },
      onError: (err: AxiosError) => {
        console.error(err);
      },
    });
    return (
        <LoginForm mutate={mutate} />
    )
  }
  

  export default LoginPage
  
    
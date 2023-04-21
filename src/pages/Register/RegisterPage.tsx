import React from "react"
import RegisterForm from "../../components/Register/RegisterForm"
import {register} from "../../api/authService"
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { setCookie, getCookie} from '../../utils/cookies'
import { AxiosError } from 'axios'

function RegisterPage(){
    const navigate = useNavigate();
    const { mutate } = useMutation(register, {
      onSuccess: (data) => {
        if (data) {
          setCookie('accessToken', data.accessToken)
          navigate("/posts")
        }
      },
      onError: (err: AxiosError) => {
        console.log(err);
      },
    });
    return (
      <RegisterForm mutate={mutate} />
    )
  }
  

export default RegisterPage
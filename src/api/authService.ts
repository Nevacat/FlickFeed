import { AxiosError } from 'axios';
import { AuthResponse, LoginRequest, RegisterRequest, UserPayload } from '../interface/auth'
import { axiosImgInstance, axiosInstance } from './axios'

export const login = async (user: LoginRequest) => {
  try {
    const { data } = await axiosInstance.post<AuthResponse>(
      '/auth/login',
      user
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const register = async (user: RegisterRequest) => {
  try{ 
  const { data } = await axiosImgInstance.post<AuthResponse>('/auth/register', user)
    return data
  } catch (error:unknown) {
    if(error instanceof AxiosError &&error.response?.status === 400){
      alert('이메일 또는 유저이름이 중복되었습니다.')
    } else {
      console.error(error);
    }
  }
};

export const verify = async () => {
  try {
    const { data } = await axiosInstance.post<UserPayload>('/auth/me');
    return data;
  } catch (error) {
    console.error(error);
  }
};

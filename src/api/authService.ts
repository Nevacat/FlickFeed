import {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  UserPayload,
} from '../interface/auth';
import { axiosInstance } from './axios';

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
  try {
    const { data } = await axiosInstance.post<AuthResponse>(
      '/auth/register',
      user
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const verify = async () => {
  try {
    const { data } = await axiosInstance.get<UserPayload>('/auth/verify');
    return data;
  } catch (error) {
    console.log(error);
  }
};

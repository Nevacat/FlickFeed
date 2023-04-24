export interface LoginRequest {
    email: string
    password: string
  }
  
  export interface RegisterRequest extends LoginRequest {
    username: string,
    passwordConfirm: string,
    selectedFile: File | null,
    sangTae: string
  }
  
  export interface UserPayload {
    id: number
    username: string
    email: string
  }
  
  export interface AuthResponse extends UserPayload {
    iat: number
    exp: number
    accessToken: string
  } 
  
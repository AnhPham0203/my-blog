export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  userName: string;
  fullName: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    username: string;
    fullName: string;
  };
  token: string;
}

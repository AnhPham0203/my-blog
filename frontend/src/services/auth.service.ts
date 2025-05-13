import axios from "axios";
import { LoginDto, RegisterDto, AuthResponse } from "@/types/auth";

const API_URL = "http://localhost:3000"; // Your NestJS backend URL

export const authService = {
  async login(data: LoginDto): Promise<AuthResponse> {
    const response = await axios.post<AuthResponse>(
      `${API_URL}/auth/login`,
      data
    );
    return response.data;
  },

  async register(data: RegisterDto): Promise<AuthResponse> {
    const response = await axios.post<AuthResponse>(
      `${API_URL}/auth/register`,
      data
    );
    return response.data;
  },
};

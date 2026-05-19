import { api } from "@/lib/axios";
import {
  AuthResponse,
  LoginFormInputs,
  RegisterFormInputs,
} from "./definations";

const LOGIN_URL = "/auth/login/";
const REGISTER_URL = "/auth/register/";
const LOGOUT = "/auth/logout/";

export const loginUser = async (
  credentials: LoginFormInputs,
): Promise<AuthResponse> => {
  const response = await api.post(LOGIN_URL, credentials);
  return response.data;
};

export const registerUser = async (
  data: RegisterFormInputs,
): Promise<AuthResponse> => {
  const response = await api.post(REGISTER_URL, data);
  return response.data;
};

export const logoutUser = async (): Promise<void> => {
  await api.post(LOGOUT);
};

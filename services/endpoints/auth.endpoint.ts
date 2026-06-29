import { api } from "@/lib/axios";
import {
  AuthResponse,
  LoginFormInputs,
  Profile,
  RegAuthResponse,
  RegisterFormInputs,
} from "../../types/auth.definations";

const LOGIN_URL = "/auth/login/";
const REGISTER_URL = "/auth/register/";
const LOGOUT = "/auth/logout/";
const PROFILE = "/auth/me/";

export const loginUser = async (
  credentials: LoginFormInputs,
): Promise<AuthResponse> => {
  const response = await api.post(LOGIN_URL, credentials);
  return response.data;
};

export const registerUser = async (
  data: RegisterFormInputs,
): Promise<RegAuthResponse> => {
  const response = await api.post(REGISTER_URL, data);
  return response.data;
};

export const logoutUser = async (refresh: string): Promise<void> => {
  await api.post(LOGOUT, { refresh });
};

export const userProfile = async (): Promise<Profile> => {
  const response = await api.get<Profile>(PROFILE);
  return response.data;
};

export const deleteProfile = async (): Promise<void> => {
  await api.delete(PROFILE);
};

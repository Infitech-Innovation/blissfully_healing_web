export type ROLE = "admin" | "user";

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: ROLE;
};

export interface Profile extends User {
  bio: string | null;
  avatar: string | null;
  full_name: string;
}

export interface LoginFormInputs{
  email: string;
  password: string;
};

export interface RegisterFormInputs extends LoginFormInputs {
  first_name: string;
  last_name: string;
  confirm_password: string;
}

export interface AuthResponse {
  user: User;
  access: string;
  refresh: string;
}

export interface RegAuthResponse {
  first_name: string;
  last_name: string;
  email: string;
}

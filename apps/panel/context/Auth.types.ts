export interface AuthContextType {
  user: any;
  error?: string;
  success?: string;
  loading?: any;
  login: (email: string, password: string) => void;
  forgotPassword: (email: string) => void;
  passwordReset: (email: string, token: any) => void;
  logout: () => void;
  register: (payload: RegisterPayload) => void;
}

export type Tokens = {
  expires: string;
  token: string;
};

export interface LoginPayload {
  email: string;
  password: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface AuthResponse {
  tokens: {
    access: Tokens;
    refresh: Tokens;
  };
}

export interface RegisterPayload {
  name: string;
  lastName: string;
  email: string;
  phone: {
    countryCode: string;
    number: number;
  };
  password: string;
  organisation: {
    name: string;
    address: string;
  };
  privacyPolicy: boolean;
  commercialMsg: boolean;
}

export interface RegisterFormPayload {
  name: string;
  surName: string;
  email: string;
  countryCode: string;
  number: number;
  password: string;
  organisationName: string;
  organisationAddress: string;
  privacyPolicy: boolean;
  commercialMsg: boolean;
}

export interface ResetPasswordPayload {
  password: string;
}

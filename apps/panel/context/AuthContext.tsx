import React, { createContext, useContext, ReactNode, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { AuthContextType, AuthResponse, RegisterPayload, Tokens } from './Auth.types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const accessToken = Cookies.get('accessToken');
const accessTokenExpires = Cookies.get('accessTokenExpires');
const refreshToken = Cookies.get('refreshToken');
const api = axios.create({ baseURL: 'http://localhost:3024/v1/auth' });

const setTokens = (access: Tokens, refresh: Tokens, userId?: number) => {
  const accessExpired = new Date(access.expires);
  const refreshExpired = new Date(refresh.expires);
  Cookies.set('accessToken', access.token, { expires: accessExpired });
  Cookies.set('accessTokenExpires', access.expires);
  Cookies.set('refreshToken', refresh.token, { expires: refreshExpired });
  if (userId) Cookies.set('userId', userId);
};

const refreshTokenFunction = async () => {
  if (!refreshToken) return false;
  try {
    const response = await api.post('/refresh-tokens', { refreshToken });
    const tokens = response?.data;
    if (tokens) {
      setTokens(tokens.access, tokens.refresh);
      return true;
    }
  } catch (error) {
    console.error('Refresh token error:', error);
    return false;
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if ((refreshToken && !accessToken) || (refreshToken && !accessTokenExpires) || new Date() >= new Date(accessTokenExpires)) {
      refreshTokenFunction();
    }
  }, []);

  React.useEffect(() => {
    //burada get endpointine accessToken ile istek at ve kullanıcının bilgilerini al ve setUser'a setle
    if (accessToken) setUser(true);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    try {
      const response = await api.post<AuthResponse>('/login', { email, password });
      setUser(response);
      const tokens = response?.data?.tokens;
      const userId = response?.data?.user?.id;
      if (tokens) {
        setTokens(tokens.access, tokens.refresh, userId);
        setError('');
        window.location.pathname = '/';
      } else {
        console.log(response, 'response');
        setError('Login error occurred');
      }
    } catch (error: any) {
      setError(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const forgotPassword = async (email: string): Promise<void> => {
    setLoading(true);
    try {
      const response = await api.post<AuthResponse>('/forgot-password', { email });
      if (response.status === 204) {
        setSuccess('E-posta adresinize gönderdiğimiz şifre sıfırlama mailinden yeni şifrenizi oluşturabilirsiniz.');
        setError('');
      }
    } catch (error: any) {
      setError(error?.response?.data?.message);
      setSuccess('');
    } finally {
      setLoading(false);
    }
  };

  const passwordReset = async (password: string, token: any): Promise<void> => {
    setLoading(true);
    try {
      const response = await api.post<AuthResponse>(`/reset-password?token=${token}`, { password });
      if (response.status === 204) {
        setSuccess('Şifre başarıyla değiştirildi, giriş yapabilirsiniz.');
        setError('');
      }
    } catch (error: any) {
      setError(error?.response?.data?.message);
      setSuccess('');
    } finally {
      setLoading(false);
    }
  };

  const verificationEmail = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await api.post<AuthResponse>(
        '/send-verification-email',
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (response.status === 204) {
        setSuccess('E-posta adresinize doğrulama maili gönderildi, lütfen kontrol edin.');
        setError('');
      }
    } catch (error: any) {
      setError(error?.response?.data?.message);
      setSuccess('');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    Cookies.remove('accessTokenExpires');
    window.location.href = '/giris';
    setUser(null);
  };

  const register = async (payload: RegisterPayload) => {
    setLoading(true);
    try {
      const response = await api.post<AuthResponse>('/register', payload);
      const tokens = response?.data?.tokens;
      const userId = response?.data?.user?.id;
      if (tokens) {
        setTokens(tokens.access, tokens.refresh, userId);
        setError('');
        window.location.pathname = '/';
      } else {
        setError('Registration error occurred');
      }
    } catch (error: any) {
      setError(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, success, loading, login, forgotPassword, passwordReset, verificationEmail, logout, register }}>{children}</AuthContext.Provider>
  );
};

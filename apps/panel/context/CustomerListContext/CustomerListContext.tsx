import React, { createContext, useContext, ReactNode, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { CustomerListContextType, CustomerListPayload } from './CustomerListContext.types';

const CustomerListContext = createContext<CustomerListContextType | undefined>(undefined);

export const useCustomerList = () => {
  const context = useContext(CustomerListContext);
  if (context === undefined) {
    throw new Error('useCustomerList must be used within an CustomerListProvider');
  }
  return context;
};

const accessToken = Cookies.get('accessToken');
const api = axios.create({ baseURL: 'http://localhost:3024/v1/customers' });

export const CustomerListProvider = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const createCustomerList = async (formData: object): Promise<void> => {
    setLoading(true);
    try {
      const response = await api.post<CustomerListPayload>('/create-list', formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'content-type': 'multipart/form-data',
        },
      });
      if (response.data) setSuccess('Dosya içeriği başarıyla gönderildi');
      setError(response.data ? '' : 'Dosya içeriği gönderme başarısız');
    } catch (error) {
      setError(axios.isAxiosError(error) && error.response ? error.response.data : 'Dosya içeriği gönderme sırasında bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  return <CustomerListContext.Provider value={{ error, success, loading, createCustomerList }}>{children}</CustomerListContext.Provider>;
};

import React from 'react';
import Success from '../../../storybook/src/stories/Icons/src/success';
import Fail from '../../../storybook/src/stories/Icons/src/fail';
import Cookies from 'js-cookie';
import { AuthResponse } from '@/context/Auth.types';
import axios from 'axios';

async function getData(token: string) {
  const accessToken = Cookies.get('accessToken');
  const api = axios.create({ baseURL: 'http://localhost:3024/v1/auth' });
  try {
    const response = await api.post<AuthResponse>(
      `/verify-email?token=${token}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.status;
  } catch (error: any) {
    return error?.response?.data.code;
  }
}

const EmailVerification = async (params: any) => {
  const token = params?.searchParams?.token;
  const data = await getData(token);
  const success = data === 204 ? true : false;
  return (
    <div className="flex flex-col justify-center items-center gap-5 px-6 h-[75vh]">
      {success ? <Success width={150} height={150} /> : <Fail width={150} height={150} />}
      <h2 className="text-4xl font-bold text-center">{success ? 'E-posta Doğrulandı!' : 'E-posta Doğrulama Başarısız!'}</h2>
      <p className="text-center text-lg">
        {success
          ? 'E-posta adresiniz başarıyla doğrulandı. Artık tüm özelliklerimizi sınırsızca kullanabilirsiniz. Bize katıldığınız için teşekkür ederiz!'
          : 'E-posta adresiniz doğrulanamadı. Lütfen gönderdiğimiz e-postadaki bağlantıyı tekrar deneyin veya yardım almak için bize ulaşın.'}
      </p>
    </div>
  );
};

export default EmailVerification;

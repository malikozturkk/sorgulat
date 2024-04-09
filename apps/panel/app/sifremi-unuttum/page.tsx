'use client';
import React from 'react';
import { Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Email from '../../../storybook/src/stories/Icons/src/email';
import FormInput from '@/components/formInput';
import { useAuth } from '../../context/AuthContext';
import { ForgotPasswordPayload } from '@/context/Auth.types';

const ForgotPassword = () => {
  const { forgotPassword, error, success, loading } = useAuth();

  const formMethods = useForm({
    defaultValues: {
      email: '',
    },
  });

  const { control, handleSubmit } = formMethods;

  const onSubmit = async (data: ForgotPasswordPayload): Promise<void> => {
    forgotPassword(data.email);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center h-dvh">
          <div className="flex flex-col items-center justify-center bg-[#161B22] rounded-lg p-7 gap-5 w-[90%] md:w-[450px]">
            <h1 className="text-xl font-bold">Şifremi Unuttum</h1>
            <FormInput control={control} name="email" label="E-Posta" placeholder="you@example.com" type="email" icon={<Email />} />

            {error && <div className="w-full bg-[red] p-3 rounded-xl">{error}</div>}
            {success && <div className="w-full bg-[green] p-3 rounded-xl">{success}</div>}
            <Button className="w-full text-[#ECEDEE]" type="submit" size="lg" color="success" isLoading={loading}>
              Gönder
            </Button>
            <div className="flex p-0 justify-between w-full">
              <Link href="/giris">
                <Button>Giriş Yap</Button>
              </Link>
              <Link href="/uye-ol">
                <Button>Üye Ol</Button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;

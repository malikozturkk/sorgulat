'use client';
import React from 'react';
import { Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import EyeFilledIcon from '../../../storybook/src/stories/Icons/src/eye-filled-icon';
import EyeSlashFilledIcon from '../../../storybook/src/stories/Icons/src/eye-slash-filled-icon';
import Email from '../../../storybook/src/stories/Icons/src/email';
import FormInput from '@/components/formInput';
import { useAuth } from '../../context/AuthContext';
import { LoginPayload } from '@/context/Auth.types';

const Login = () => {
  const { login, error, loading } = useAuth();
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const formMethods = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { control, handleSubmit } = formMethods;

  const onSubmit = async (data: LoginPayload): Promise<void> => {
    login(data.email, data.password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center h-dvh">
          <div className="flex flex-col items-center justify-center bg-[#161B22] rounded-lg p-7 gap-5 w-[90%] md:w-[450px]">
            <h1 className="text-xl font-bold">Giriş Yap</h1>
            <FormInput control={control} name="email" label="E-Posta" placeholder="you@example.com" type="email" icon={<Email />} />
            <FormInput
              control={control}
              name="password"
              minLength={8}
              label="Şifre"
              placeholder="Şifreniz"
              type={isVisible ? 'text' : 'password'}
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />
            {error && <div className="w-full bg-[red] p-3 rounded-xl">{error}</div>}
            <Button className="w-full text-[#ECEDEE]" type="submit" size="lg" color="success" isLoading={loading}>
              Giriş Yap
            </Button>
            <div className="flex p-0 justify-between w-full">
              <Link href="/uye-ol">
                <Button>Üye Ol</Button>
              </Link>
              <Link href="/sifremi-unuttum">
                <Button>Şifremi Unuttum</Button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

'use client';
import React from 'react';
import { Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import EyeFilledIcon from '../../../storybook/src/stories/Icons/src/eye-filled-icon';
import EyeSlashFilledIcon from '../../../storybook/src/stories/Icons/src/eye-slash-filled-icon';
import FormInput from '@/components/formInput';
import { useAuth } from '../../context/AuthContext';
import { ResetPasswordPayload } from '@/context/Auth.types';

const ResetPassword = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { passwordReset, error, loading, success } = useAuth();
  const [isVisibleRepeat, setIsVisibleRepeat] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibilityRepeat = () => setIsVisibleRepeat(!isVisibleRepeat);

  const queryParameters = new URLSearchParams(window.location.search);
  const token = queryParameters.get('token');

  const formMethods = useForm({
    defaultValues: {
      password: '',
      repeatPassword: '',
    },
  });

  const { control, watch, handleSubmit } = formMethods;
  const password = watch('password');

  const onSubmit = async (data: ResetPasswordPayload): Promise<void> => {
    passwordReset(data.password, token);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center h-dvh">
          <div className="flex flex-col items-center justify-center bg-[#161B22] rounded-lg p-7 gap-5 w-[90%] md:w-[450px]">
            <h1 className="text-xl font-bold">Şifre Yenileme</h1>

            <div className="w-full flex items-start justify-center gap-3">
              <FormInput
                control={control}
                name="password"
                minLength={8}
                label="Yeni Şifre"
                placeholder="Yeni Şifreniz"
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
              <FormInput
                control={control}
                name="repeatPassword"
                minLength={8}
                label="Şifre Tekrar"
                placeholder="Şifrenizin Tekrarı"
                rules={{
                  validate: value => value === password || 'Şifreler Eşleşmiyor',
                }}
                type={isVisibleRepeat ? 'text' : 'password'}
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibilityRepeat}>
                    {isVisibleRepeat ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
              />
            </div>
            {error && <div className="w-full bg-[red] p-3 rounded-xl">{error}</div>}
            {success && <div className="w-full bg-[green] p-3 rounded-xl">{success}</div>}
            <Button className="w-full text-[#ECEDEE]" type="submit" size="lg" color="success" isLoading={loading}>
              Şifremi Yenile
            </Button>
            <div className="flex p-0 justify-between w-full">
              <Link href="/giris" className="w-full">
                <Button variant="bordered" className="w-full" size="lg">
                  Giriş Yap
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;

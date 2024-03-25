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
import { RegisterFormPayload } from '@/context/Auth.types';

const Register = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { register, error, loading } = useAuth();
  const [isVisibleRepeat, setIsVisibleRepeat] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibilityRepeat = () => setIsVisibleRepeat(!isVisibleRepeat);

  const formMethods = useForm({
    defaultValues: {
      name: '',
      surName: '',
      email: '',
      countryCode: '',
      number: '',
      password: '',
      repeatPassword: '',
      organisationName: '',
      organisationAddress: '',
      privacyPolicy: '',
      commercialMsg: '',
    },
  });

  const { control, watch, handleSubmit } = formMethods;
  const password = watch('password');

  const onSubmit = async (data: RegisterFormPayload): Promise<void> => {
    const payload = {
      name: data.name,
      lastName: data.surName,
      email: data.email,
      phone: {
        countryCode: data.countryCode,
        number: data.number,
      },
      password: data.password,
      organisation: {
        name: data.organisationName,
        address: data.organisationAddress,
      },
      privacyPolicy: data.privacyPolicy,
      commercialMsg: data.commercialMsg || false,
    };
    register(payload);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center h-dvh">
          <div className="flex flex-col items-center justify-center bg-[#161B22] rounded-lg p-7 gap-5 w-[90%] md:w-[450px]">
            <h1 className="text-xl font-bold">Üye Ol</h1>
            <div className="w-full flex items-start justify-center gap-3">
              <FormInput control={control} name="name" label="İsim" placeholder="İsminiz" type="text" minLength={2} />
              <FormInput control={control} name="surName" label="Soyisim" placeholder="Soyisminiz" type="text" minLength={2} />
            </div>
            <FormInput control={control} name="email" label="E-Posta" placeholder="you@example.com" type="email" icon={<Email />} />
            <div className="w-full flex items-start justify-center gap-3">
              <FormInput control={control} name="countryCode" label="Ülke Kodu" placeholder="+90" type="text" minLength={3} />
              <FormInput control={control} name="number" label="Telefon Numarası" placeholder="Telefon Numaranız" type="text" minLength={10} />
            </div>

            <div className="w-full flex items-start justify-center gap-3">
              <FormInput
                control={control}
                name="password"
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
              <FormInput
                control={control}
                name="repeatPassword"
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
            <FormInput control={control} name="organisationName" label="Organizasyon Adı" placeholder="Organizasyon Adınız" type="text" />
            <FormInput control={control} name="organisationAddress" label="Organizasyon Adresi" placeholder="Organizasyon Adresiniz" inputType="textArea" minLength={10} />
            <FormInput control={control} name="privacyPolicy" label="Kullanım Koşulları ve Gizlilik Politikasını Okudum Onaylıyorum." inputType="checkbox" />
            <FormInput control={control} name="commercialMsg" label="Ticari Sms ve Email Gönderimini Kabul Ediyorum." inputType="checkbox" isRequired={false} />
            {error && <div className="w-full bg-[red] p-3 rounded-xl">{error}</div>}
            <Button className="w-full text-[#ECEDEE]" type="submit" size="lg" color="success" isLoading={loading}>
              Üye Ol
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

export default Register;

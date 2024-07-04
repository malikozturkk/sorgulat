'use client';
import React from 'react';
import { Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import FormInput from '@/components/formInput';
import { useAuth } from '../../context/AuthContext';
import { CustomerListPayload } from '@/context/CustomerListContext/CustomerListContext.types';

const CustomerListForm = () => {
  const { login, error, loading } = useAuth();
  const formMethods = useForm({
    defaultValues: {
      name: '',
      description: '',
      segmentName: '',
      segmentDescription: '',
      criteria: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      age: '',
      gender: '',
      location: '',
    },
  });

  const { control, handleSubmit } = formMethods;

  const onSubmit = async (data: any): Promise<void> => {
    console.log(data, 'data');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-center flex-col gap-5">
        <div className="flex flex-col w-full gap-2">
          <h1>Genel Bilgiler</h1>
          <div className="flex gap-3">
            <FormInput control={control} name="name" label="İsim *" type="text" minLength={2} />
            <FormInput control={control} name="description" isRequired={false} label="Açıklama" type="text" />
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <h1>Segment Bilgileri</h1>
          <div className="flex gap-3">
            <FormInput control={control} name="segmentName" label="İsim *" type="text" minLength={2} />
            <FormInput control={control} name="criteria" minLength={4} label="Kriter *" type="text" />
            <FormInput control={control} name="segmentDescription" isRequired={false} label="Açıklama" type="text" />
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <h1>Müşteri Bilgileri</h1>
          <div className="flex gap-3">
            <FormInput control={control} name="firstName" label="Müşteri İsmi *" type="text" minLength={2} />
            <FormInput control={control} name="lastName" minLength={4} label="Müşteri Soyismi *" type="text" />
            <FormInput control={control} name="email" label="Müşteri Email *" type="email" />
            <FormInput control={control} name="phone" label="Müşteri Numarası" type="text" isRequired={false} maxLength={11} minLength={11} />
          </div>
          <div className="flex gap-3 mt-5">
            <div className="w-1/4">
              <FormInput control={control} name="age" label="Müşteri Yaşı *" type="text" minLength={1} maxLength={3} />
            </div>
            <div className="w-1/4">
              <FormInput control={control} name="location" label="Müşteri Lokasyonu" isRequired={false} type="text" minLength={2} maxLength={15} />
            </div>
            <div className="w-1/2">
              <FormInput
                control={control}
                name="gender"
                label="Cinsiyet"
                inputType="radio"
                options={[
                  { value: 'male', label: 'Erkek' },
                  { value: 'female', label: 'Kadın' },
                  { value: 'other', label: 'Diğer' },
                ]}
              />
            </div>
          </div>
        </div>
        {error && <div className="w-full bg-[red] p-3 rounded-xl">{error}</div>}
        <Button className="w-full text-[#ECEDEE]" type="submit" size="lg" color="success" isLoading={loading}>
          Yükle
        </Button>
      </div>
    </form>
  );
};

export default CustomerListForm;

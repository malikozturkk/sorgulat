import React from 'react';
import { Input, Textarea, Checkbox, RadioGroup, Radio } from '@nextui-org/react';
import { Controller, Control, FieldValues } from 'react-hook-form';

type Option = {
  value: string;
  label: string;
};

interface FormInputProps<TFieldValues extends FieldValues = FieldValues> {
  control: Control<TFieldValues>;
  name: keyof TFieldValues;
  label: string;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
  endContent?: JSX.Element | React.ReactNode;
  inputType?: 'textArea' | 'checkbox' | 'input' | 'radio';
  minLength?: number;
  maxLength?: number;
  isRequired?: boolean;
  options?: Option[];
  rules?: object;
}

const FormInput = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  label,
  placeholder,
  type,
  icon,
  endContent,
  inputType,
  minLength = 4,
  maxLength = 255,
  options,
  isRequired = true,
  rules,
}: FormInputProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        ...(isRequired && {
          required: `${label} Zorunlu`,
        }),
        minLength: {
          value: minLength,
          message: `${label} Minimum ${minLength} Karakter Olmalı`,
        },
        maxLength: {
          value: maxLength,
          message: `${label} Maximum ${maxLength} Karakter Olmalı`,
        },
        ...(name === 'email' && {
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Email Formatı Doğru Değil',
          },
        }),
        ...(name === 'phone' && {
          pattern: {
            value: /^05\d{9}$/,
            message: 'Telefon numarası formatı doğru değil. 05** *** ** ** formatında olmalı',
          },
        }),
        ...rules,
      }}
      render={({ field, fieldState: { error } }) =>
        inputType === 'textArea' ? (
          <Textarea label={label} variant="bordered" placeholder={placeholder} isInvalid={!!error} color={error ? 'danger' : 'default'} errorMessage={error?.message} {...field} />
        ) : inputType === 'checkbox' ? (
          <div>
            <Checkbox label={label} isInvalid={isRequired && !!error} color={error ? 'danger' : 'success'} {...field}>
              {label}
            </Checkbox>
          </div>
        ) : inputType === 'radio' ? (
          <RadioGroup label={label} isRequired={isRequired} orientation="horizontal" isInvalid={isRequired && !!error} color={error ? 'danger' : 'success'} {...field}>
            {options?.map(option =>
              (({ value, label }) => (
                <Radio key={value} value={value}>
                  {label}
                </Radio>
              ))(option),
            )}
          </RadioGroup>
        ) : (
          <Input
            label={label}
            variant="bordered"
            placeholder={placeholder}
            startContent={icon}
            isInvalid={!!error}
            maxLength={maxLength}
            color={error ? 'danger' : 'default'}
            endContent={endContent}
            errorMessage={error?.message}
            type={type}
            {...field}
          />
        )
      }
    />
  );
};

export default FormInput;

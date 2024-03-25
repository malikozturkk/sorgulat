import React from 'react';
import { Input, Textarea, Checkbox } from '@nextui-org/react';
import { Controller, Control, FieldValues } from 'react-hook-form';

interface FormInputProps<TFieldValues extends FieldValues = FieldValues> {
  control: Control<TFieldValues>;
  name: keyof TFieldValues;
  label: string;
  placeholder: string;
  type?: string;
  icon?: React.ReactNode;
  endContent?: JSX.Element | React.ReactNode;
  inputType?: 'textArea' | 'checkbox' | 'input';
  minLength?: number;
  isRequired?: boolean;
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
        ...(name === 'email' && {
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Email Formatı Doğru Değil',
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
        ) : (
          <Input
            label={label}
            variant="bordered"
            placeholder={placeholder}
            startContent={icon}
            isInvalid={!!error}
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

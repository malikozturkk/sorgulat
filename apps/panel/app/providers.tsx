'use client';
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { Layout } from '../components/layout/layout';
import { AuthProvider } from '@/context/AuthContext';
import VerifyEmailModal from '@/components/verifyEmailModal';
import { usePathname } from 'next/navigation';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
  isEmailVerified?: boolean;
}

export function Providers({ children, themeProps, isEmailVerified }: ProvidersProps) {
  const pathname = usePathname();
  return (
    <NextUIProvider>
      <NextThemesProvider defaultTheme="system" attribute="class" {...themeProps}>
        <AuthProvider>
          {isEmailVerified !== undefined && !isEmailVerified && pathname !== '/email-dogrulama' && <VerifyEmailModal />}
          <Layout>{children}</Layout>
        </AuthProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

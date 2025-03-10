import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { fontSans } from '@/config/fonts';
import clsx from 'clsx';
import axios from 'axios';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Panel | Sorgulat',
  description: 'Generated by Next.js',
};

async function getData() {
  const accessToken = cookies().get('accessToken')?.value;
  const userId = cookies().get('userId')?.value;
  if (accessToken === undefined || userId === undefined) {
    return;
  }
  const res = await axios.get(`http://localhost:3024/v1/users/${userId}/`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await getData();
  const isEmailVerified = data?.data?.isEmailVerified;
  return (
    <html lang="en">
      <body className={clsx('font-sans antialiased', fontSans.className)}>
        <Providers isEmailVerified={isEmailVerified}>
          {/* @ts-ignore */}
          {children}
        </Providers>
      </body>
    </html>
  );
}

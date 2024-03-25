// /middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const cookies = request.cookies;
  const accessToken = cookies.get('accessToken');

  const url = request.nextUrl.clone();
  if (url.pathname === '/giris' || url.pathname === '/uye-ol') {
    if (accessToken) {
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.url.includes('?acceptLang=')) {
    return NextResponse.next();
  }

  const acceptLanguageHeader =
    request.headers.get('Accept-Language') || 'en-US';
  const acceptLang = acceptLanguageHeader.substring(0, 2);

  const searchParams = new URLSearchParams(undefined);
  searchParams.append('acceptLang', acceptLang as string);

  return NextResponse.redirect(
    new URL(`/?${searchParams.toString()}`, request.url)
  );
}

export const config = {
  matcher: '/',
};

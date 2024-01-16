import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = /facebookexternalhit|twitterbot|linkedinbot/i.test(userAgent);

  if (!isBot) {
    return NextResponse.redirect('https://chat.openai.com/g/g-TXJFbP1Cg-nilsgpt');
  }

  return NextResponse.next();
};
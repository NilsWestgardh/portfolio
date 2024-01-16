"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://chat.openai.com/g/g-TXJFbP1Cg-nilsgpt');
  }, []);

  return null;
}
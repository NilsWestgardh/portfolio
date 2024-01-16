"use client";

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'https://chat.openai.com/g/g-TXJFbP1Cg-nilsgpt';
    }, 1000);
  }, []);

  return (
    <title>Redirecting...</title>
  );
}
"use client";

import { useEffect } from 'react';
import Router from 'next/router';

export default function Home() {
  useEffect(() => {
    Router.push('https://chat.openai.com/g/g-TXJFbP1Cg-nilsgpt');
  }, []);

  return null;
}
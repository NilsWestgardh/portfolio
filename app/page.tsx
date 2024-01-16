"use client";

import { useEffect } from 'react';
import Head from 'next/head';

export default function Page() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'https://chat.openai.com/g/g-TXJFbP1Cg-nilsgpt';
    }, 1000);
  }, []);

  return (
    <Head>
      <title>Redirecting...</title>
      <meta property="og:title" content="Nils Westgardh's Personal Portfolio Website" />
      <meta property="og:description" content="<Nils Westgardh is an entrepeneur and advertising professional who's resume and portfolio is a ChatGPT bot.>" />
      <meta property="og:image" content="https://nilswestgardh.com/opengraph-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nilswestgardh.com/twitter-image.png" />
    </Head>
  );
}
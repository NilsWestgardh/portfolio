import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Nils Westgardh's Personal Portfolio Website",
  description: "Nils Westgardh is an entrepreneur and advertising professional whose resume and portfolio is a ChatGPT bot.",
  openGraph: {
    images: [
      { url: "https://nilswestgardh.com/opengraph-image.png", alt: "Open Graph Image for Nils Westgardh's portfolio site." },
      { url: "https://nilswestgardh.com/twitter-image.png", alt: "Twitter Image for Nils Westgardh's portfolio site." }
    ],
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

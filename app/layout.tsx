import icon from '@/public/icon.jpg';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const interSans = Inter({
  // weight: ['400', '500', '600', '700', '800', '900'],
  // variable: '--font-inter-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PrimeDev',
  description: '',
  icons: [{ url: icon.src, rel: 'icon' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="overflow-x-hidden bg-slate-50">
      <body className={`${interSans.className} h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}

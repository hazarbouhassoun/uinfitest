import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import Layout from './components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js App',
  description: 'A sample Next.js app with login flow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
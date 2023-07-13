'use client';

import { Inter } from 'next/font/google';
import NavBar from './components/navbar';
import { Provider } from 'react-redux';
import type { Metadata } from 'next';
import { store } from '@/store';
import './globals.css';
import Loading from './shared/loading';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Provider store={store}>
          <Loading />
          {children}
        </Provider>
      </body>
    </html>
  )
}

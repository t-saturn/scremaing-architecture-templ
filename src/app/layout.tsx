import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { APP_CONFIG } from '@config/app';
import '@shared/styles/globals.css';
import { JSX } from 'react';
import { ThemeProvider } from '@/shared/providers/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: APP_CONFIG.name,
  description: APP_CONFIG.description,
};

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

import '@/styles/globals.css';
import '@/styles/fonts.css';
import '@/styles/variables.css';
import type {Viewport} from 'next';
import type {PropsWithChildren} from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout(props: PropsWithChildren) {
  const {children} = props;

  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import '@/styles/globals.css';
import '@/styles/fonts.css';
import type {Metadata} from 'next';
import type {PropsWithChildren} from 'react';

export const metadata: Metadata = {
  title: 'MDR32 - микроконтроллеры российского производства',
  description: 'Описание функций пинов (Pinout) российского микроконтроллера K1986BE92QI (MDR32F9Q2I)',
};

export default function RootLayout(props: PropsWithChildren) {
  const {children} = props;

  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

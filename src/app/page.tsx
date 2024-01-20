import type {Metadata} from 'next';
import MainPage from '@/components/pages/MainPage';

export const metadata: Metadata = {
  title: 'MDR32 - микроконтроллеры российского производства',
  description: 'Описание функций пинов (Pinout) российского микроконтроллера K1986BE92QI (MDR32F9Q2I)',
};

export default function Page() {
  return <MainPage />;
}

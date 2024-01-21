import type {Metadata} from 'next';
import MainPage from '@/components/pages/MainPage';
import {getAllPosts} from '@/lib/api/api';

export const metadata: Metadata = {
  title: 'MDR32 - микроконтроллеры российского производства',
  description: 'Описание функций пинов (Pinout) российского микроконтроллера K1986BE92QI (MDR32F9Q2I)',
};

export default async function Page() {
  const posts = await getAllPosts();

  return <MainPage posts={posts} />;
}

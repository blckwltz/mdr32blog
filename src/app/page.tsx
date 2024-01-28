import type {Metadata} from 'next';
import MainPage from '@/components/pages/MainPage';
import {getAllPosts} from '@/lib/api/api';
import {OG_IMAGE_PATH} from '@/lib/constants/common';

export const metadata: Metadata = {
  title: 'MDR32 - микроконтроллеры российского производства',
  description: 'Описание функций пинов (Pinout) российского микроконтроллера K1986BE92QI (MDR32F9Q2I)',
  openGraph: {
    images: [
      {
        url: `${OG_IMAGE_PATH}`,
        type: 'image/png',
        alt: 'MDR32',
      },
    ],
  },
};

export default async function Page() {
  const posts = await getAllPosts();

  return <MainPage posts={posts} />;
}

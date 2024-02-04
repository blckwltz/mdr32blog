import {ImageResponse} from 'next/og';

export const contentType = 'image/png';
export const alt = 'MDR32';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff',
          fontSize: 128,
        }}
      >
        MDR32
      </div>
    ),
    {
      ...size,
    },
  );
}

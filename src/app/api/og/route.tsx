import {ImageResponse} from 'next/og';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          backgroundColor: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        MDR32
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

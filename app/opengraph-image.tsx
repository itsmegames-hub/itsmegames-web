import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'ItsMeGames — From Players to Creators';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Imagen para compartir el sitio (Discord, WhatsApp, X, etc.):
// mascota + wordmark actual del estudio sobre fondo blanco de marca.
export default async function OpengraphImage() {
  const [perro, wordmark] = await Promise.all([
    readFile(join(process.cwd(), 'public/brand/logo-perro.png'), 'base64'),
    readFile(join(process.cwd(), 'public/brand/logo-itsmegames.png'), 'base64'),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
        borderBottom: '18px solid #187a34',
        padding: '0 70px',
      }}
    >
      <img src={`data:image/png;base64,${perro}`} width={430} height={430} alt="" />
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 30 }}>
        {/* El PNG del wordmark tiene mucho margen blanco: se recorta con overflow. */}
        <div style={{ display: 'flex', width: 600, height: 335, overflow: 'hidden' }}>
          <img
            src={`data:image/png;base64,${wordmark}`}
            width={680}
            height={680}
            alt=""
            style={{ marginLeft: -40, marginTop: -165 }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 4,
            fontSize: 40,
            fontWeight: 700,
            color: '#222222',
          }}
        >
          From Players to Creators
        </div>
      </div>
    </div>,
    size,
  );
}

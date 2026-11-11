import { ImageResponse } from 'next/og';

export const alt = 'The Kernel Keeper — ItsMeGames';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Imagen para compartir: sin texto por idioma más allá del nombre del juego,
// así sirve igual para la versión en español y en inglés.
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background: '#07090d',
        backgroundImage:
          'linear-gradient(rgba(57,255,20,0.06) 2px, transparent 2px), linear-gradient(90deg, rgba(57,255,20,0.06) 2px, transparent 2px)',
        backgroundSize: '48px 48px',
        color: '#d7e3ea',
        fontFamily: 'monospace',
      }}
    >
      <div style={{ display: 'flex', color: '#ffb000', fontSize: 30, marginBottom: 24 }}>
        ROGUELITE · TWIN-STICK · PC
      </div>
      <div style={{ display: 'flex', fontSize: 130, lineHeight: 0.9, fontWeight: 700 }}>
        THE KERNEL
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 130,
          lineHeight: 0.9,
          fontWeight: 700,
          color: '#39ff14',
        }}
      >
        KEEPER
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 48,
          padding: '12px 24px',
          background: '#00e5ff',
          color: '#07090d',
          fontSize: 32,
          alignSelf: 'flex-start',
        }}
      >
        ▶ ItsMeGames · Córdoba, Argentina
      </div>
    </div>,
    size,
  );
}

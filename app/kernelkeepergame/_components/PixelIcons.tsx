/* Íconos pixel art originales (grilla 16×16). No reproducen íconos de productos reales. */

type IconProps = { className?: string };

function Pixels({
  rects,
  className = 'w-10 h-10',
}: {
  rects: [number, number, number, number, string][];
  className?: string;
}) {
  return (
    <svg viewBox="0 0 16 16" className={className} shapeRendering="crispEdges" aria-hidden="true">
      {rects.map(([x, y, w, h, fill], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill={fill} />
      ))}
    </svg>
  );
}

const K = '#111';
const W = '#f4f4f4';
const G = '#c3c7cb';
const B = '#0b2a8f';
const C = '#00e5ff';
const R = '#ff2a2a';
const Y = '#ffd700';
const N = '#39ff14';
const A = '#ffb000';

/** Programa de dibujo: lienzo con pincel */
export function PaintIcon({ className }: IconProps) {
  return (
    <Pixels
      className={className}
      rects={[
        [1, 2, 12, 11, K],
        [2, 3, 10, 9, W],
        [3, 9, 3, 2, R],
        [6, 5, 3, 2, C],
        [3, 4, 2, 2, Y],
        [10, 8, 2, 2, K],
        [11, 7, 2, 2, A],
        [12, 6, 2, 2, A],
        [13, 4, 2, 3, K],
        [14, 3, 1, 1, K],
      ]}
    />
  );
}

/** Planilla: grilla de celdas */
export function SheetIcon({ className }: IconProps) {
  return (
    <Pixels
      className={className}
      rects={[
        [1, 1, 14, 14, K],
        [2, 2, 12, 12, W],
        [2, 2, 12, 2, N],
        [6, 2, 1, 12, G],
        [10, 2, 1, 12, G],
        [2, 6, 12, 1, G],
        [2, 9, 12, 1, G],
        [2, 12, 12, 1, G],
        [7, 7, 3, 2, C],
      ]}
    />
  );
}

/** Reproductor: ecualizador */
export function MediaIcon({ className }: IconProps) {
  return (
    <Pixels
      className={className}
      rects={[
        [1, 2, 14, 12, K],
        [2, 3, 12, 10, '#020403'],
        [3, 9, 2, 3, N],
        [6, 6, 2, 6, N],
        [9, 4, 2, 8, Y],
        [12, 7, 1, 5, N],
        [6, 5, 2, 1, R],
        [9, 3, 2, 1, R],
      ]}
    />
  );
}

/** Pinball: bola y paletas */
export function PinballIcon({ className }: IconProps) {
  return (
    <Pixels
      className={className}
      rects={[
        [2, 1, 12, 14, K],
        [3, 2, 10, 12, B],
        [7, 4, 2, 2, W],
        [6, 5, 1, 1, G],
        [9, 5, 1, 1, G],
        [4, 7, 2, 2, Y],
        [10, 8, 2, 2, R],
        [3, 12, 4, 1, A],
        [9, 12, 4, 1, A],
        [6, 11, 1, 1, A],
        [9, 11, 1, 1, A],
      ]}
    />
  );
}

/** Mensajero: globo de diálogo */
export function ChatIcon({ className }: IconProps) {
  return (
    <Pixels
      className={className}
      rects={[
        [1, 2, 14, 9, K],
        [2, 3, 12, 7, A],
        [3, 11, 3, 2, K],
        [3, 10, 2, 2, A],
        [4, 5, 2, 2, K],
        [7, 5, 2, 2, K],
        [10, 5, 2, 2, K],
        [11, 0, 5, 5, R],
        [13, 1, 1, 3, W],
      ]}
    />
  );
}

/** Hydra Browser: ventanas apiladas y corruptas */
export function HydraIcon({ className }: IconProps) {
  return (
    <Pixels
      className={className}
      rects={[
        [6, 0, 10, 8, K],
        [7, 1, 8, 1, R],
        [7, 2, 8, 5, W],
        [3, 3, 10, 8, K],
        [4, 4, 8, 1, R],
        [4, 5, 8, 5, W],
        [0, 6, 10, 10, K],
        [1, 7, 8, 1, R],
        [1, 8, 8, 7, W],
        [2, 10, 2, 2, R],
        [6, 10, 2, 2, R],
        [3, 13, 4, 1, K],
      ]}
    />
  );
}

/** Pendrive (el Keeper entra por USB) */
export function UsbIcon({ className }: IconProps) {
  return (
    <Pixels
      className={className}
      rects={[
        [5, 0, 6, 4, G],
        [6, 1, 1, 1, K],
        [9, 1, 1, 1, K],
        [4, 4, 8, 11, K],
        [5, 5, 6, 9, '#2b2f33'],
        [7, 8, 2, 2, C],
      ]}
    />
  );
}

/** Disco sin montar con candado */
export function LockedDriveIcon({ className }: IconProps) {
  return (
    <Pixels
      className={className}
      rects={[
        [0, 5, 16, 9, K],
        [1, 6, 14, 7, G],
        [2, 10, 4, 1, N],
        [12, 10, 2, 1, R],
        [9, 1, 6, 1, K],
        [9, 1, 1, 4, K],
        [14, 1, 1, 4, K],
        [8, 4, 8, 6, A],
        [11, 6, 2, 2, K],
      ]}
    />
  );
}

/** Documento de texto */
export function DocIcon({ className }: IconProps) {
  return (
    <Pixels
      className={className}
      rects={[
        [2, 0, 10, 16, K],
        [3, 1, 8, 14, W],
        [11, 0, 3, 4, K],
        [11, 1, 2, 3, G],
        [4, 4, 6, 1, B],
        [4, 7, 6, 1, B],
        [4, 10, 4, 1, B],
      ]}
    />
  );
}

import { useEffect, useState } from "react";

const COLORS = ["#EE9B0F", "#148F8A", "#E85D4C", "#2BA86A", "#4AADDC", "#FFD56A"];

type Piece = { id: number; left: number; delay: number; color: string; size: number; dx: number; round: boolean };

export function Confetti({ burstKey }: { burstKey: number }) {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    if (!burstKey) return;
    const next: Piece[] = Array.from({ length: 28 }, (_, i) => ({
      id: burstKey * 100 + i,
      left: Math.random() * 100,
      delay: Math.random() * 0.25,
      color: COLORS[i % COLORS.length],
      size: 8 + Math.random() * 10,
      dx: (Math.random() - 0.5) * 160,
      round: i % 3 === 0,
    }));
    setPieces(next);
    const t = window.setTimeout(() => setPieces([]), 1400);
    return () => window.clearTimeout(t);
  }, [burstKey]);

  if (!pieces.length) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.round ? p.size : p.size * 0.6,
            borderRadius: p.round ? 999 : 4,
            background: p.color,
            animation: `confetti-fall 1.2s ease-in ${p.delay}s both`,
            ["--dx" as string]: `${p.dx}px`,
          }}
        />
      ))}
    </div>
  );
}

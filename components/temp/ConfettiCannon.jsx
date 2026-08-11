import { useEffect, useRef, useState } from 'react';

const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#3b82f6', '#a855f7', '#ec4899'];

const createParticles = (direction) =>
  Array.from({ length: 28 }, (_, index) => ({
    color: COLORS[index % COLORS.length],
    id: index,
    rotate: `${Math.round(Math.random() * 720 - 360)}deg`,
    x: `${Math.round((Math.random() * 160 + 30) * direction)}px`,
    y: `${Math.round(-(Math.random() * 234 + 104))}px`,
  }));

export default function ConfettiCannon({ side }) {
  const [bursts, setBursts] = useState([]);
  const dragStart = useRef(null);
  const dragged = useRef(false);
  const initialFired = useRef(false);
  const direction = side === 'left' ? 1 : -1;

  const fire = () => {
    const burst = { id: Date.now(), particles: createParticles(direction) };
    setBursts((current) => [...current, burst]);
    window.setTimeout(() => {
      setBursts((current) => current.filter(({ id }) => id !== burst.id));
    }, 1400);
  };

  useEffect(() => {
    if (initialFired.current) return;
    initialFired.current = true;
    fire();
  }, []);

  const startPull = (event) => {
    dragStart.current = event.clientY;
    dragged.current = false;
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const pull = (event) => {
    if (dragStart.current !== null && event.clientY - dragStart.current > 20) {
      dragged.current = true;
      dragStart.current = null;
      fire();
    }
  };

  const endPull = () => {
    if (!dragged.current) fire();
    dragStart.current = null;
  };

  return (
    <div
      aria-label={`Pháo giấy bên ${side === 'left' ? 'trái' : 'phải'}`}
      style={{
        bottom: '120px',
        left: side === 'left' ? 'max(24px, 12vw)' : 'auto',
        pointerEvents: 'auto',
        position: 'absolute',
        right: side === 'right' ? 'max(24px, 12vw)' : 'auto',
        transform: 'scale(2)',
        transformOrigin: 'bottom center',
        width: '72px',
        zIndex: 1,
      }}
    >
      <div style={{ height: '120px', position: 'relative' }}>
        {bursts.map((burst) => (
          <div aria-hidden="true" key={burst.id} style={{ inset: '28px 36px auto', position: 'absolute' }}>
            {burst.particles.map((particle) => (
              <span
                key={particle.id}
                style={{
                  '--confetti-x': particle.x,
                  '--confetti-y': particle.y,
                  '--confetti-rotate': particle.rotate,
                  animation: 'confettiBurst 1.3s cubic-bezier(.2,.8,.3,1) forwards',
                  backgroundColor: particle.color,
                  height: '8px',
                  position: 'absolute',
                  width: '5px',
                }}
              />
            ))}
          </div>
        ))}
        <div
          aria-hidden="true"
          style={{
            background: 'linear-gradient(135deg, #ef4444, #facc15 45%, #3b82f6)',
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            height: '82px',
            left: 0,
            position: 'absolute',
            top: 0,
            width: '72px',
          }}
        />
        <button
          aria-label="Kéo dây để bắn pháo giấy"
          onPointerDown={startPull}
          onPointerMove={pull}
          onPointerUp={endPull}
          style={{
            background: '#facc15',
            border: '2px solid #b45309',
            borderRadius: '50%',
            cursor: 'grab',
            height: '18px',
            left: '27px',
            padding: 0,
            position: 'absolute',
            top: '96px',
            touchAction: 'none',
            width: '18px',
          }}
          type="button"
        />
        <div
          aria-hidden="true"
          style={{
            borderLeft: '2px dashed #92400e',
            height: '28px',
            left: '35px',
            position: 'absolute',
            top: '76px',
          }}
        />
      </div>
      <style>{`
        @keyframes confettiBurst {
          from { opacity: 1; transform: translate(0, 0) rotate(0); }
          to { opacity: 0; transform: translate(var(--confetti-x), var(--confetti-y)) rotate(var(--confetti-rotate)); }
        }
      `}</style>
    </div>
  );
}

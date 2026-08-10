const instances = [
  { id: 1, x: 3, y: 8, size: 110, rotate: -15, opacity: 1, delay: 0 },
  { id: 2, x: 18, y: 55, size: 72, rotate: 10, opacity: 0.9, delay: 0.3 },
  { id: 3, x: 30, y: 20, size: 148, rotate: -5, opacity: 1, delay: 0.1 },
  { id: 4, x: 55, y: 5, size: 100, rotate: 8, opacity: 1, delay: 0.5 },
  { id: 5, x: 72, y: 0, size: 60, rotate: -20, opacity: 0.7, delay: 0.2 },
  { id: 6, x: 88, y: 10, size: 88, rotate: 12, opacity: 0.95, delay: 0.4 },
  { id: 7, x: 96, y: 35, size: 52, rotate: -8, opacity: 0.75, delay: 0.6 },
  { id: 8, x: 62, y: 28, size: 90, rotate: 5, opacity: 1, delay: 0.15 },
  { id: 9, x: 42, y: 42, size: 40, rotate: -12, opacity: 0.65, delay: 0.35 },
  { id: 10, x: 8, y: 72, size: 56, rotate: 18, opacity: 0.8, delay: 0.25 },
  { id: 11, x: 24, y: 78, size: 130, rotate: -7, opacity: 1, delay: 0.45 },
  { id: 12, x: 50, y: 65, size: 76, rotate: 15, opacity: 0.9, delay: 0.1 },
  { id: 13, x: 70, y: 60, size: 48, rotate: -22, opacity: 0.7, delay: 0.55 },
  { id: 14, x: 82, y: 72, size: 108, rotate: 6, opacity: 1, delay: 0.2 },
  { id: 15, x: 94, y: 82, size: 44, rotate: -14, opacity: 0.6, delay: 0.4 },
  { id: 16, x: 38, y: 85, size: 86, rotate: 20, opacity: 0.85, delay: 0.3 },
  { id: 17, x: 14, y: 92, size: 62, rotate: -10, opacity: 0.75, delay: 0.5 },
  { id: 18, x: 60, y: 88, size: 38, rotate: 9, opacity: 0.6, delay: 0.15 },
];

export default function BackgroundTemp({ image }) {
  return (
    <div
      aria-hidden="true"
      style={{
        backgroundColor: '#fff',
        minHeight: '100vh',
        overflow: 'hidden',
        pointerEvents: 'none',
        position: 'relative',
        width: '100%',
      }}
    >
      {instances.map((instance) => (
        <img
          alt=""
          key={instance.id}
          src={image}
          style={{
            animation: `floatBob 4s ease-in-out ${instance.delay}s infinite alternate`,
            height: `${instance.size}px`,
            left: `${instance.x}%`,
            objectFit: 'contain',
            opacity: instance.opacity,
            position: 'absolute',
            top: `${instance.y}%`,
            transform: `rotate(${instance.rotate}deg)`,
            userSelect: 'none',
            width: `${instance.size}px`,
            '--rotate': `${instance.rotate}deg`,
          }}
        />
      ))}
      <style>{`
        @keyframes floatBob {
          from { transform: rotate(var(--rotate)) translateY(0); }
          to { transform: rotate(var(--rotate)) translateY(-12px); }
        }
      `}</style>
    </div>
  );
}

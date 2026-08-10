import { Fragment } from 'react';

const instances = [
  { id: 1, x: 1, y: 1, size: 300, rotate: 20, opacity: 1 },
  { id: 2, x: 50, y: 55, size: 72, rotate: 10, opacity: 0.9 },
  { id: 3, x: 30, y: 20, size: 148, rotate: -5, opacity: 1 },
  { id: 4, x: 55, y: 5, size: 100, rotate: 8, opacity: 1 },
  { id: 5, x: 72, y: 0, size: 60, rotate: -20, opacity: 0.7 },
  { id: 6, x: 88, y: 10, size: 88, rotate: 12, opacity: 0.95 },
  { id: 7, x: 96, y: 35, size: 52, rotate: -8, opacity: 0.75 },
  { id: 8, x: 62, y: 28, size: 90, rotate: 5, opacity: 1 },
  { id: 9, x: 42, y: 42, size: 40, rotate: -12, opacity: 0.65 },
  { id: 10, x: 8, y: 72, size: 56, rotate: 18, opacity: 0.8 },
  { id: 11, x: 24, y: 78, size: 130, rotate: -7, opacity: 1 },
  { id: 12, x: 50, y: 65, size: 76, rotate: 15, opacity: 0.9 },
  { id: 13, x: 70, y: 60, size: 48, rotate: -22, opacity: 0.7 },
  { id: 14, x: 82, y: 72, size: 108, rotate: 6, opacity: 1 },
  { id: 15, x: 94, y: 82, size: 44, rotate: -14, opacity: 0.6 },
  { id: 16, x: 38, y: 85, size: 86, rotate: 20, opacity: 0.85 },
  { id: 17, x: 14, y: 92, size: 62, rotate: -10, opacity: 0.75 },
  { id: 18, x: 60, y: 88, size: 38, rotate: 9, opacity: 0.6 },
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
        <Fragment key={instance.id}>
          <img
            alt=""
            src={image}
            style={{
              height: `${instance.size}px`,
              left: `${instance.x}%`,
              objectFit: 'contain',
              opacity: instance.opacity,
              position: 'absolute',
              top: `${instance.y}%`,
              transform: `rotate(${instance.rotate}deg)`,
              userSelect: 'none',
              width: `${instance.size}px`,
            }}
          />
          <span
            style={{
              backgroundColor: '#111827',
              borderRadius: '4px',
              color: '#fff',
              fontSize: '12px',
              fontWeight: 700,
              left: `calc(${instance.x}% + ${instance.size}px + 6px)`,
              padding: '2px 5px',
              position: 'absolute',
              top: `calc(${instance.y}% + ${instance.size / 2}px)`,
              transform: 'translateY(-50%)',
              whiteSpace: 'nowrap',
            }}
          >
            ID: {instance.id}
          </span>
        </Fragment>
      ))}
    </div>
  );
}

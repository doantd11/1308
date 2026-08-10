import { Fragment } from 'react';

const instances = [
  { id: 1, x: 1, y: 1, size: 300, rotate: 20, opacity: 1 },
  { id: 2, x: 18, y: 45, size: 150, rotate: -20, opacity: 0.8 },
  { id: 3, x: 30, y: 20, size: 148, rotate: -5, opacity: 0.5 },
  { id: 4, x: 45, y: -5, size: 250, rotate: -160, opacity: 0.8 },
  { id: 5, x: 72, y: 0, size: 80, rotate: -20, opacity: 1 },
  { id: 6, x: 88, y: 10, size: 130, rotate: -30, opacity: 0.95 },
  { id: 7, x: 96, y: 35, size: 150, rotate: -8, opacity: 1 },
  { id: 8, x: 70, y: 30, size: 90, rotate: 5, opacity: 0.7 },
  { id: 9, x: 50, y: 80, size: 100, rotate: -12, opacity: 0.65 },
  { id: 10, x: 8, y: 82, size: 110, rotate: 18, opacity: 0.8 },
  { id: 11, x: 85, y: 85, size: 150, rotate: -7, opacity: 1 },
  { id: 12, x: 35, y: 75, size: 76, rotate: 15, opacity: 0.9 },
  { id: 13, x: 70, y: 60, size: 75, rotate: -22, opacity: 0.7 },
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

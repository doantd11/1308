import { useState } from 'react';

const getRandomStyle = () => ({
  left: `${5 + Math.random() * 90}%`,
  opacity: Math.random() * 0.5,
  top: `${5 + Math.random() * 90}%`,
  transform: `translate(-50%, -50%) scale(${0.1 + Math.random() * 0.9})`,
});

export default function BackgroundTemp({ image }) {
  const [imageStyle] = useState(getRandomStyle);

  return (
    <div
      aria-hidden="true"
      style={{
        height: '100vh',
        left: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        width: '100vw',
        zIndex: -1,
      }}
    >
      <img
        alt=""
        src={image}
        style={{
          position: 'absolute',
          ...imageStyle,
        }}
      />
    </div>
  );
}

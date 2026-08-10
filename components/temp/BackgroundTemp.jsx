import { useState } from 'react';

const IMAGE_COUNT = 13;
const GRID_SIZE = 4;

const getRandomStyles = () => {
  const cells = Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, index) => index)
    .sort(() => Math.random() - 0.5)
    .slice(0, IMAGE_COUNT);

  return cells.map((cell) => {
    const row = Math.floor(cell / GRID_SIZE);
    const column = cell % GRID_SIZE;

    return {
      left: `${((column + 0.5) / GRID_SIZE) * 100}%`,
      opacity: Math.random() * 0.5,
      top: `${((row + 0.5) / GRID_SIZE) * 100}%`,
      transform: `translate(-50%, -50%) scale(${0.1 + Math.random() * 0.9})`,
    };
  });
};

export default function BackgroundTemp({ image }) {
  const [imageStyles] = useState(getRandomStyles);

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
      {imageStyles.map((imageStyle, index) => (
        <img
          alt=""
          key={index}
          src={image}
          style={{
            height: '20vh',
            maxHeight: '20vh',
            maxWidth: '20vw',
            objectFit: 'contain',
            position: 'absolute',
            width: '20vw',
            ...imageStyle,
          }}
        />
      ))}
    </div>
  );
}

import { useState } from 'react';

const imagePositions = [
  [8, 14],
  [38, 40],
  [72, 48],
  [96, 20],
  [24, 82],
  [79, 88],
  [2, 103],
  [98, 64],
  [64, -8],
  [45, 108],
  [14, 58],
  [88, 112],
  [-4, 36],
];

const styleCache = new Map();

const getImageStyles = (image) => {
  if (styleCache.has(image)) {
    return styleCache.get(image);
  }

  const styles = imagePositions.map(([left, top]) => ({
    left: `${left + (Math.random() - 0.5) * 6}%`,
    opacity: 0.85 + Math.random() * 0.15,
    top: `${top + (Math.random() - 0.5) * 6}%`,
    transform: `translate(-50%, -50%) scale(${0.55 + Math.random() * 0.65}) rotate(${-30 + Math.random() * 60}deg)`,
  }));

  styleCache.set(image, styles);
  return styles;
};

export default function BackgroundTemp({ image }) {
  const [imageStyles] = useState(() => getImageStyles(image));

  return (
    <div
      aria-hidden="true"
      style={{
        background: '#fff',
        height: '100vh',
        left: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        width: '100vw',
        zIndex: 0,
      }}
    >
      {imageStyles.map((imageStyle, index) => (
        <img
          alt=""
          key={index}
          src={image}
          style={{
            maxWidth: '220px',
            minWidth: '90px',
            position: 'absolute',
            width: '16vw',
            ...imageStyle,
          }}
        />
      ))}
    </div>
  );
}

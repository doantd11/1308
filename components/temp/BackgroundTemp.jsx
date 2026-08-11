import backgroundImage from '../../images/background/bg.png';

export default function BackgroundTemp() {
  return (
    <div
      aria-hidden="true"
      style={{
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        position: 'fixed',
        zIndex: 0,
      }}
    >
      <img
        alt=""
        src={backgroundImage}
        style={{
          display: 'block',
          height: '100%',
          objectFit: 'cover',
          width: '100%',
        }}
      />
    </div>
  );
}

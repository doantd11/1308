import backgroundImage from '../../images/background/bg.png';

export default function BackgroundTemp() {
  return (
    <div
      aria-hidden="true"
      style={{
        backgroundColor: '#fff',
        inset: 0,
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
          height: '100vh',
          left: 0,
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          width: '100vw',
        }}
      />
    </div>
  );
}

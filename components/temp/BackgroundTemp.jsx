export default function BackgroundTemp({ image }) {
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
          right: 0,
          top: 0,
          transform: 'scale(10) rotate(45deg)',
          transformOrigin: 'top right',
        }}
      />
    </div>
  );
}

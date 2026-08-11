import birthdayBanner from '../../images/sticker/hb.png';

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
        src={birthdayBanner}
        style={{
          display: 'block',
          height: 'auto',
          left: '50%',
          maxWidth: '200%',
          position: 'absolute',
          top: '-71px',
          transform: 'translateX(-50%)',
          width: '740px',
        }}
      />
    </div>
  );
}

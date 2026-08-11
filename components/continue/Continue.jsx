import { useState } from 'react';

export default function Continue() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      style={{
        background:
          'radial-gradient(circle 80vh at 100% 100%, transparent 0 80vh, rgba(0, 0, 0, 0.35) 95vh, rgba(0, 0, 0, 0.9) 140vh)',
        inset: 0,
        position: 'fixed',
        zIndex: 1,
      }}
    >
      <button
        aria-label="Close"
        onClick={() => setIsVisible(false)}
        style={{
          alignItems: 'center',
          background: '#000',
          border: '1px solid #fff',
          borderRadius: '50%',
          bottom: '24px',
          color: '#fff',
          cursor: 'pointer',
          display: 'flex',
          fontSize: '20px',
          height: '44px',
          justifyContent: 'center',
          position: 'absolute',
          right: '24px',
          width: '44px',
        }}
        type="button"
      >
        X
      </button>
    </div>
  );
}

export default function Continue({ onClose }) {
  return (
    <div
      style={{
        inset: 0,
        position: 'fixed',
        zIndex: 1,
      }}
    >
      <div
        aria-hidden="true"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.35))',
          inset: 0,
          maskImage: 'radial-gradient(circle 80vh at 100% 100%, transparent 0 80vh, #000 80vh)',
          pointerEvents: 'none',
          position: 'absolute',
          WebkitMaskImage:
            'radial-gradient(circle 80vh at 100% 100%, transparent 0 80vh, #000 80vh)',
        }}
      />
      <button
        aria-label="Close"
        onClick={onClose}
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

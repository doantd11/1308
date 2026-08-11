export default function Continue({ onClose }) {
  return (
    <div
      style={{
        inset: 0,
        position: 'fixed',
        zIndex: 1,
      }}
    >
      <style>{`
        @keyframes continueOverlayIn {
          from {
            clip-path: circle(0 at 0 0);
            -webkit-clip-path: circle(0 at 0 0);
          }
          to {
            clip-path: circle(160% at 0 0);
            -webkit-clip-path: circle(160% at 0 0);
          }
        }
      `}</style>
      <div
        aria-hidden="true"
        style={{
          animation: 'continueOverlayIn 900ms ease-out forwards',
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.35))',
          clipPath: 'circle(160% at 0 0)',
          inset: 0,
          maskImage: 'radial-gradient(circle 80vh at 100% 100%, transparent 0 80vh, #000 80vh)',
          pointerEvents: 'none',
          position: 'absolute',
          WebkitClipPath: 'circle(160% at 0 0)',
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

export default function Continue() {
  return (
    <div
      aria-hidden="true"
      style={{
        background:
          'radial-gradient(circle 80vh at 100% 100%, transparent 0 80vh, rgba(0, 0, 0, 0.35) 95vh, rgba(0, 0, 0, 0.9) 140vh)',
        inset: 0,
        pointerEvents: 'none',
        position: 'fixed',
        zIndex: 1,
      }}
    />
  );
}

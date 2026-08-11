export default function ButtonTemp({ className, image, label, onClick, showContent = true, style }) {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        alignItems: 'center',
        backgroundColor: '#eab308',
        border: '4px solid #facc15',
        color: '#fff',
        display: 'flex',
        fontSize: '32px',
        justifyContent: 'center',
        padding: '24px 40px',
        whiteSpace: 'nowrap',
        width: 'max-content',
        ...style,
      }}
      type="button"
    >
      <img
        alt=""
        src={image}
        style={{
          height: '56px',
          objectFit: 'contain',
          opacity: showContent ? 1 : 0,
          position: 'absolute',
          right: '-5px',
          top: '-8px',
          transform: 'rotate(15deg)',
          width: '56px',
        }}
      />
      <span style={{ opacity: showContent ? 1 : 0 }}>{label}</span>
    </button>
  );
}

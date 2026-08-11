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
      {showContent && (
        <img
          alt=""
          src={image}
          style={{
            height: '56px',
            objectFit: 'contain',
            position: 'absolute',
            right: '-5px',
            top: '-8px',
            transform: 'rotate(15deg)',
            width: '56px',
          }}
        />
      )}
      {showContent && label}
    </button>
  );
}

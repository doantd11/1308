export default function ButtonTemp({ className, image, label, onClick }) {
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
      }}
      type="button"
    >
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
      {label}
    </button>
  );
}

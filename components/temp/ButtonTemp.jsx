export default function ButtonTemp({ className, image, label, onClick }) {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        alignItems: 'center',
        backgroundColor: '#eab308',
        border: '2px solid #facc15',
        color: '#fff',
        display: 'flex',
        gap: '8px',
        justifyContent: 'center',
      }}
      type="button"
    >
      <img
        alt=""
        src={image}
        style={{
          height: '28px',
          objectFit: 'contain',
          transform: 'rotate(15deg)',
          width: '28px',
        }}
      />
      {label}
    </button>
  );
}

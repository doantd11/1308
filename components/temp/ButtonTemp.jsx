export default function ButtonTemp({ className, image, label, onClick, showContent = true, style }) {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        alignItems: 'center',
        backgroundColor: '#facc15',
        border: '4px solid #ca8a04',
        borderRadius: '999px',
        color: '#fff',
        display: 'flex',
        fontSize: '32px',
        justifyContent: 'center',
        lineHeight: 1,
        minHeight: '88px',
        padding: '24px 40px',
        position: 'relative',
        whiteSpace: 'nowrap',
        width: 'max-content',
        ...style,
      }}
      type="button"
    >
      {image && (
        <img
          alt=""
          src={image}
          style={{
            height: '56px',
            objectFit: 'contain',
            opacity: showContent ? 1 : 0,
            position: 'absolute',
            right: '-5px',
            top: '-5px',
            transform: 'rotate(15deg)',
            width: '56px',
          }}
        />
      )}
      <span style={{ opacity: showContent ? 1 : 0 }}>{label}</span>
    </button>
  );
}

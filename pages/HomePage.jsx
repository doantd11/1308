const buttons = [
  ['Like', 'top'],
  ['Love', 'right'],
  ['Hate', 'bottom'],
  ['Sad', 'left'],
];

export default function HomePage() {
  return (
    <>
      <style>{`
        .home-page {
          align-items: center;
          display: flex;
          justify-content: center;
          min-height: 100vh;
          overflow: hidden;
        }

        .button-ring {
          border: 2px solid #2563eb;
          border-radius: 50%;
          height: 360px;
          position: absolute;
          width: 360px;
        }

        .circle-button {
          background: #2563eb;
          border: 0;
          border-radius: 999px;
          color: white;
          cursor: pointer;
          padding: 12px 20px;
          position: absolute;
          transform: translate(-50%, -50%);
        }

        .circle-button:hover {
          background: #1d4ed8;
        }

        .top { left: 50%; top: 0; }
        .right { left: 100%; top: 50%; }
        .bottom { left: 50%; top: 100%; }
        .left { left: 0; top: 50%; }
      `}</style>
      <main className="home-page">
        <div className="button-ring">
          {buttons.map(([label, position]) => (
            <button className={`circle-button ${position}`} key={label} type="button">
              {label}
            </button>
          ))}
        </div>
      </main>
    </>
  );
}

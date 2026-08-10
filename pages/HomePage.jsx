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
          min-height: 100vh;
          overflow: hidden;
          position: relative;
        }

        .button-ring {
          border: 2px solid #2563eb;
          border-radius: 50%;
          bottom: -140px;
          height: 280px;
          left: 50%;
          position: absolute;
          transform: translateX(-50%);
          width: 280px;
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

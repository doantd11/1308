import { useState } from 'react';

const buttons = [
  ['Like', 'top'],
  ['Love', 'right'],
  ['Hate', 'bottom'],
  ['Sad', 'left'],
];

export default function HomePage() {
  const [rotation, setRotation] = useState(0);

  return (
    <>
      <style>{`
        .home-page {
          align-items: center;
          display: flex;
          justify-content: center;
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }

        .button-ring {
          border: 2px solid #2563eb;
          border-radius: 50%;
          bottom: -50vh;
          height: 100vh;
          left: 50%;
          position: absolute;
          transition: transform 300ms ease;
          width: 100vh;
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

        .rotation-controls {
          bottom: 24px;
          display: flex;
          gap: 12px;
          left: 50%;
          position: fixed;
          transform: translateX(-50%);
          z-index: 2;
        }

        .rotation-control {
          background: #111827;
          border: 0;
          border-radius: 999px;
          color: white;
          cursor: pointer;
          font-size: 24px;
          height: 48px;
          width: 48px;
        }

        .rotation-control:hover {
          background: #374151;
        }
      `}</style>
      <main className="home-page">
        <div
          className="button-ring"
          style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}
        >
          {buttons.map(([label, position]) => (
            <button className={`circle-button ${position}`} key={label} type="button">
              {label}
            </button>
          ))}
        </div>
        <div className="rotation-controls">
          <button
            aria-label="Rotate left"
            className="rotation-control"
            onClick={() => setRotation((current) => current - 90)}
            type="button"
          >
            ←
          </button>
          <button
            aria-label="Rotate right"
            className="rotation-control"
            onClick={() => setRotation((current) => current + 90)}
            type="button"
          >
            →
          </button>
        </div>
      </main>
    </>
  );
}

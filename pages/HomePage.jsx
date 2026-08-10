import { useState } from 'react';
import HateBackground from '../components/hate/HateBackground';
import LikeBackground from '../components/like/LikeBackground';
import LoveBackground from '../components/love/LoveBackground';
import SadBackground from '../components/sad/SadBackground';

const buttons = [
  ['Like', 'top'],
  ['Love', 'right'],
  ['Hate', 'bottom'],
  ['Sad', 'left'],
];

const backgrounds = [LikeBackground, LoveBackground, HateBackground, SadBackground];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rotation = -activeIndex * 90;
  const ActiveBackground = backgrounds[activeIndex];

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
          transition: transform 600ms ease-out;
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
        }

        .circle-button:hover {
          background: #1d4ed8;
        }

        .top {
          left: 50%;
          top: 0;
          transform: translate(-50%, -50%) rotate(0deg);
        }

        .right {
          left: 100%;
          top: 50%;
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .bottom {
          left: 50%;
          top: 100%;
          transform: translate(-50%, -50%) rotate(180deg);
        }

        .left {
          left: 0;
          top: 50%;
          transform: translate(-50%, -50%) rotate(-90deg);
        }

        .rotation-controls {
          bottom: 25vh;
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
        <ActiveBackground />
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
            aria-label="Select left button"
            className="rotation-control"
            onClick={() =>
              setActiveIndex((current) => (current - 1 + buttons.length) % buttons.length)
            }
            type="button"
          >
            &lt;
          </button>
          <button
            aria-label="Select right button"
            className="rotation-control"
            onClick={() => setActiveIndex((current) => (current + 1) % buttons.length)}
            type="button"
          >
            &gt;
          </button>
        </div>
      </main>
    </>
  );
}

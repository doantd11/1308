import { useState } from 'react';
import HateBackground from '../components/hate/HateBackground';
import HateButton from '../components/hate/HateButton';
import HatePopup from '../components/hate/HatePopup';
import LikeBackground from '../components/like/LikeBackground';
import LikeButton from '../components/like/LikeButton';
import LikePopup from '../components/like/LikePopup';
import LoveBackground from '../components/love/LoveBackground';
import LoveButton from '../components/love/LoveButton';
import LovePopup from '../components/love/LovePopup';
import SadBackground from '../components/sad/SadBackground';
import SadButton from '../components/sad/SadButton';
import SadPopup from '../components/sad/SadPopup';

const buttons = [
  ['Like', 'top'],
  ['Love', 'right'],
  ['Hate', 'bottom'],
  ['Sad', 'left'],
];

const backgrounds = [LikeBackground, LoveBackground, HateBackground, SadBackground];
const buttonComponents = [LikeButton, LoveButton, HateButton, SadButton];
const popups = [LikePopup, LovePopup, HatePopup, SadPopup];
const ROTATION_DURATION = 600;

export default function HomePage() {
  const [rotationStep, setRotationStep] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [popupIndex, setPopupIndex] = useState(null);
  const rotation = -rotationStep * 90;
  const activeIndex = ((rotationStep % buttons.length) + buttons.length) % buttons.length;
  const ActiveBackground = backgrounds[activeIndex];
  const ActivePopup = popupIndex === null ? null : popups[popupIndex];

  const rotate = (step) => {
    if (isRotating) return;

    setRotationStep((current) => current + step);
    setIsRotating(true);
    window.setTimeout(() => setIsRotating(false), ROTATION_DURATION);
  };

  return (
    <>
      <style>{`
        html, body, #root {
          height: 100%;
          margin: 0;
          overflow: hidden;
        }

        .home-page {
          align-items: center;
          display: flex;
          height: 100vh;
          justify-content: center;
          position: relative;
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

        .rotation-control:disabled {
          cursor: wait;
          opacity: 0.5;
        }
      `}</style>
      <main className="home-page">
        <ActiveBackground />
        <div
          className="button-ring"
          style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}
        >
          {buttons.map(([, position], index) => {
            const Button = buttonComponents[index];

            return (
              <Button
                className={`circle-button ${position}`}
                key={position}
                onClick={() => setPopupIndex(index)}
              />
            );
          })}
        </div>
        <div className="rotation-controls">
          <button
            aria-label="Select left button"
            className="rotation-control"
            disabled={isRotating}
            onClick={() => rotate(-1)}
            type="button"
          >
            &lt;
          </button>
          <button
            aria-label="Select right button"
            className="rotation-control"
            disabled={isRotating}
            onClick={() => rotate(1)}
            type="button"
          >
            &gt;
          </button>
        </div>
        {ActivePopup && <ActivePopup onClose={() => setPopupIndex(null)} />}
      </main>
    </>
  );
}

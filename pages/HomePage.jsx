import { useState } from 'react';
import BackgroundMusic from '../components/audio/BackgroundMusic';
import HateButton from '../components/hate/HateButton';
import HatePopup from '../components/hate/HatePopup';
import LikeBackground from '../components/like/LikeBackground';
import LikeButton from '../components/like/LikeButton';
import LikePopup from '../components/like/LikePopup';
import LoveButton from '../components/love/LoveButton';
import LovePopup from '../components/love/LovePopup';
import SadButton from '../components/sad/SadButton';
import SadPopup from '../components/sad/SadPopup';

const buttons = [
  ['Like', 'top'],
  ['Love', 'right'],
  ['Hate', 'bottom'],
  ['Sad', 'left'],
];

const buttonComponents = [LikeButton, LoveButton, HateButton, SadButton];
const popups = [LikePopup, LovePopup, HatePopup, SadPopup];

export default function HomePage() {
  const [popupIndex, setPopupIndex] = useState(null);
  const ActiveBackground = LikeBackground;
  const ActivePopup = popupIndex === null ? null : popups[popupIndex];

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
          bottom: -120vh;
          height: 240vh;
          left: calc(100% - 20px);
          position: absolute;
          transition: transform 600ms ease-out;
          width: 240vh;
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

      `}</style>
      <main className="home-page">
        <ActiveBackground />
        <BackgroundMusic />
        <div
          className="button-ring"
          style={{ transform: 'translateX(-50%)' }}
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
        {ActivePopup && <ActivePopup onClose={() => setPopupIndex(null)} />}
      </main>
    </>
  );
}

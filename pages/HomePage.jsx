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
  { Button: LikeButton, Popup: LikePopup, label: 'Like' },
  { Button: LoveButton, Popup: LovePopup, label: 'Love' },
  { Button: HateButton, Popup: HatePopup, label: 'Hate' },
  { Button: SadButton, Popup: SadPopup, label: 'Sad' },
];
const PAGE_COUNT = buttons.length;
const pageArrows = [
  { label: 'Trang sau', step: 1, symbol: '>' },
  { label: 'Trang trước', step: -1, symbol: '<' },
];

export default function HomePage() {
  const [popupIndex, setPopupIndex] = useState(null);
  const [currentButtonIndex, setCurrentButtonIndex] = useState(0);
  const [pageStack, setPageStack] = useState([{ index: 0, key: 0 }]);
  const [pageDirection, setPageDirection] = useState(1);
  const ActiveBackground = LikeBackground;
  const ActivePopup = popupIndex === null ? null : buttons[popupIndex].Popup;

  const changePage = (step) => {
    const nextIndex = (currentButtonIndex + step + PAGE_COUNT) % PAGE_COUNT;
    setPageDirection(step);
    setCurrentButtonIndex(nextIndex);
    setPageStack((current) => [...current, { index: nextIndex, key: Date.now() }]);
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
          bottom: 12vh;
          height: 104px;
          left: 75%;
          position: fixed;
          transform: translateX(-50%);
          width: min(600px, calc(50vw - 48px));
          z-index: 2;
        }

        .button-page {
          align-items: center;
          display: flex;
          inset: 0;
          justify-content: center;
          pointer-events: none;
          position: absolute;
        }

        .button-page.active {
          opacity: 1;
          pointer-events: auto;
        }

        .button-page.previous {
          opacity: 0.22;
        }

        .page-next {
          animation: pageNext 600ms ease-out both;
        }

        .page-previous {
          animation: pagePrevious 600ms ease-out both;
        }

        @keyframes pageNext {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pagePrevious {
          from { opacity: 0; transform: translateX(-100%); }
          to { opacity: 1; transform: translateX(0); }
        }

        .circle-button {
          background: #2563eb;
          border: 0;
          border-radius: 999px;
          color: white;
          cursor: pointer;
          position: relative;
          transition: opacity 200ms ease;
        }

        .circle-button:hover {
          background: #1d4ed8;
        }

        .page-controls {
          bottom: 24px;
          display: flex;
          gap: 10px;
          left: 50%;
          position: fixed;
          transform: translateX(-50%);
          z-index: 4;
        }

        .page-controls button {
          background: #111827;
          border: 0;
          border-radius: 999px;
          color: #fff;
          cursor: pointer;
          font-size: 24px;
          height: 44px;
          width: 44px;
        }

      `}</style>
      <main className="home-page">
        <ActiveBackground />
        <BackgroundMusic />
        <div className="button-ring">
          {pageStack.map((page, pageOrder) => {
            const isActive = pageOrder === pageStack.length - 1;
            const pageClass = isActive
              ? pageDirection > 0 ? 'page-next active' : 'page-previous active'
              : 'previous';

            return (
              <div className={`button-page ${pageClass}`} key={page.key}>
                {buttons.map((_, offset) => {
                  const buttonIndex = (page.index + offset) % PAGE_COUNT;
                  const button = buttons[buttonIndex];
                  const Button = button.Button;

                  return (
                    <Button
                      className="circle-button"
                      key={button.label}
                      onClick={() => setPopupIndex(buttonIndex)}
                      showContent={offset === 0}
                      style={{
                        marginLeft: offset === 0 ? 0 : '-110px',
                        opacity: offset === 0 ? 1 : 0.35,
                        zIndex: PAGE_COUNT - offset,
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="page-controls">
          {pageArrows.map((arrow) => (
            <button
              aria-label={arrow.label}
              key={arrow.label}
              onClick={() => changePage(arrow.step)}
              type="button"
            >
              {arrow.symbol}
            </button>
          ))}
        </div>
        {ActivePopup && <ActivePopup onClose={() => setPopupIndex(null)} />}
      </main>
    </>
  );
}

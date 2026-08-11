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

const buttonComponents = [LikeButton, LoveButton, HateButton, SadButton];
const popups = [LikePopup, LovePopup, HatePopup, SadPopup];
const buttonLabels = ['Like', 'Love', 'Hate', 'Sad'];
const BUTTON_ANGLES = [-45, -25, -5, 15];
const PAGE_COUNT = buttonComponents.length;

export default function HomePage() {
  const [popupIndex, setPopupIndex] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageStack, setPageStack] = useState([{ index: 0, key: 0 }]);
  const [pageDirection, setPageDirection] = useState(1);
  const ActiveBackground = LikeBackground;
  const ActivePopup = popupIndex === null ? null : popups[popupIndex];

  const changePage = (step) => {
    const nextIndex = (pageIndex + step + PAGE_COUNT) % PAGE_COUNT;
    setPageDirection(step);
    setPageIndex(nextIndex);
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
          border: 2px solid #2563eb;
          border-radius: 50%;
          bottom: -65vh;
          height: 130vh;
          left: calc(100% - 20px);
          position: absolute;
          transition: transform 600ms ease-out;
          width: 130vh;
        }

        .button-page {
          inset: 0;
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
          transform-origin: 100% 100%;
        }

        .page-previous {
          animation: pagePrevious 600ms ease-out both;
          transform-origin: 100% 100%;
        }

        @keyframes pageNext {
          from { opacity: 0; transform: rotate(-80deg); }
          to { opacity: 1; transform: rotate(0); }
        }

        @keyframes pagePrevious {
          from { opacity: 0; transform: rotate(80deg); }
          to { opacity: 1; transform: rotate(0); }
        }

        .circle-button {
          background: #2563eb;
          border: 0;
          border-radius: 999px;
          color: white;
          cursor: pointer;
          padding: 12px 20px;
          position: absolute;
          transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-65vh) rotate(calc(var(--angle) * -1));
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
                {buttonComponents.map((Button, offset) => {
                  const buttonIndex = (page.index + offset) % PAGE_COUNT;

                  return (
                    <Button
                      className="circle-button"
                      key={buttonLabels[buttonIndex]}
                      onClick={() => setPopupIndex(buttonIndex)}
                      style={{
                        '--angle': `${BUTTON_ANGLES[offset]}deg`,
                        opacity: offset === 0 ? 1 : 0.35,
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="page-controls">
          <button aria-label="Trang trước" onClick={() => changePage(-1)} type="button">
            &lt;
          </button>
          <button aria-label="Trang sau" onClick={() => changePage(1)} type="button">
            &gt;
          </button>
        </div>
        {ActivePopup && <ActivePopup onClose={() => setPopupIndex(null)} />}
      </main>
    </>
  );
}

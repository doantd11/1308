import BackgroundMusic from '../components/audio/BackgroundMusic';
import Continue from '../components/continue/Continue';
import ContinueButton from '../components/ContinueButton';
import BackgroundTemp from '../components/temp/BackgroundTemp';
import React, { useState } from 'react';

export default function HomePage() {
  const [isContinueOpen, setIsContinueOpen] = useState(false);

  return (
    <>
      <style>{`
        html, body, #root {
          height: 100%;
          margin: 0;
          overflow: hidden;
        }

        .home-page {
          height: 100vh;
          overflow: hidden;
          position: relative;
        }

        .home-buttons {
          align-items: flex-end;
          bottom: 100px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: absolute;
          right: 136px;
          z-index: 1;
        }
      `}</style>
      <main className="home-page">
        <BackgroundTemp />
        <div className="home-buttons">
          {!isContinueOpen && <ContinueButton onClick={() => setIsContinueOpen(true)} />}
        </div>
        {isContinueOpen && <Continue onClose={() => setIsContinueOpen(false)} />}
        <BackgroundMusic />
      </main>
    </>
  );
}

import BackgroundMusic from '../components/audio/BackgroundMusic';
import ContinueButton from '../components/ContinueButton';
import BackgroundTemp from '../components/temp/BackgroundTemp';

export default function HomePage() {
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
          bottom: 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: absolute;
          right: 32px;
          z-index: 1;
        }
      `}</style>
      <main className="home-page">
        <BackgroundTemp />
        <div className="home-buttons">
          <ContinueButton />
        </div>
        <BackgroundMusic />
      </main>
    </>
  );
}

import BackgroundMusic from '../components/audio/BackgroundMusic';
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
      `}</style>
      <main className="home-page">
        <BackgroundTemp />
        <BackgroundMusic />
      </main>
    </>
  );
}

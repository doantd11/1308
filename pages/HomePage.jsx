import BackgroundMusic from '../components/audio/BackgroundMusic';
import LikeBackground from '../components/like/LikeBackground';

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
        <LikeBackground />
        <BackgroundMusic />
      </main>
    </>
  );
}

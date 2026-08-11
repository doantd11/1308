import BackgroundMusic from '../components/audio/BackgroundMusic';
import HateButton from '../components/hate/HateButton';
import LikeButton from '../components/like/LikeButton';
import LoveButton from '../components/love/LoveButton';
import SadButton from '../components/sad/SadButton';
import BackgroundTemp from '../components/temp/BackgroundTemp';

const buttonItems = [
  { id: 'like', Component: LikeButton },
  { id: 'sad', Component: SadButton },
  { id: 'love', Component: LoveButton },
  { id: 'hate', Component: HateButton },
];

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
          {buttonItems.map(({ id, Component }) => (
            <Component key={id} />
          ))}
        </div>
        <BackgroundMusic />
      </main>
    </>
  );
}

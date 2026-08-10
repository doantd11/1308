import { useEffect, useRef, useState } from 'react';
import backgroundAudio from '../../audio/Nơi Này Có Anh.mp3';

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => () => audioRef.current?.pause(), []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop src={backgroundAudio} />
      <button
        aria-label={isPlaying ? 'Tắt nhạc nền' : 'Bật nhạc nền'}
        onClick={toggleMusic}
        style={{
          background: '#111827',
          border: 0,
          borderRadius: '999px',
          bottom: '24px',
          color: '#fff',
          cursor: 'pointer',
          padding: '10px 16px',
          position: 'fixed',
          right: '24px',
          zIndex: 3,
        }}
        type="button"
      >
        {isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
      </button>
    </>
  );
}

import { useEffect, useRef, useState } from 'react';
import backgroundAudio from '../../audio/Nơi Này Có Anh.mp3';

const musicNotes = [
  ['♪', '#f87171', '0s'],
  ['♫', '#facc15', '0.15s'],
  ['♬', '#4ade80', '0.3s'],
  ['♪', '#60a5fa', '0.45s'],
  ['♩', '#c084fc', '0.6s'],
  ['♫', '#fb923c', '0.75s'],
];

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

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

  const seekMusic = (event) => {
    const time = Number(event.target.value);
    setCurrentTime(time);
    if (audioRef.current) audioRef.current.currentTime = time;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      <audio ref={audioRef} loop src={backgroundAudio} />
      <div
        style={{
          alignItems: 'center',
          background: '#111827',
          borderRadius: '999px',
          bottom: '24px',
          color: '#fff',
          display: 'flex',
          gap: '12px',
          left: '50%',
          padding: '8px 16px',
          position: 'fixed',
          transform: 'translateX(-50%)',
          width: 'min(420px, calc(100vw - 48px))',
          zIndex: 3,
        }}
      >
        {isPlaying && (
          <div
            aria-hidden="true"
            style={{
              display: 'flex',
              gap: '18px',
              left: '50%',
              position: 'absolute',
              top: '-28px',
              transform: 'translateX(-50%)',
            }}
          >
            {musicNotes.map(([note, color, delay]) => (
              <span
                key={`${note}-${delay}`}
                style={{
                  color,
                  fontSize: '22px',
                  animation: `musicNoteJump 900ms ease-in-out ${delay} infinite alternate`,
                  display: 'inline-block',
                }}
              >
                {note}
              </span>
            ))}
          </div>
        )}
        <button
          aria-label={isPlaying ? 'Dừng nhạc' : 'Phát nhạc'}
          onClick={toggleMusic}
          style={{
            background: '#eab308',
            border: 0,
            borderRadius: '999px',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '18px',
            height: '36px',
            width: '36px',
          }}
          type="button"
        >
          {isPlaying ? '❚❚' : '▶'}
        </button>
        <span style={{ fontSize: '12px', minWidth: '34px' }}>{formatTime(currentTime)}</span>
        <input
          aria-label="Tiến trình nhạc"
          max={duration || 0}
          min="0"
          onChange={seekMusic}
          step="0.1"
          style={{ flex: 1 }}
          type="range"
          value={currentTime}
        />
        <span style={{ fontSize: '12px', minWidth: '34px' }}>{formatTime(duration)}</span>
      </div>
      <style>{`
        @keyframes musicNoteJump {
          from { transform: translateY(4px) rotate(-8deg); }
          to { transform: translateY(-12px) rotate(8deg); }
        }
      `}</style>
    </>
  );
}

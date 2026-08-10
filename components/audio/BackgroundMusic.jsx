import { useEffect, useRef, useState } from 'react';
import backgroundAudio from '../../audio/Nơi Này Có Anh.mp3';

const musicNotes = [
  ['♪', '#f87171', '0s', -14],
  ['♫', '#facc15', '0.15s', 0],
  ['♬', '#4ade80', '0.3s', 16],
  ['♪', '#60a5fa', '0.45s', 30],
  ['♩', '#c084fc', '0.6s', -28],
  ['♫', '#fb923c', '0.75s', 44],
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

  const progress = duration ? Math.min(100, (currentTime / duration) * 100) : 0;

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
        <div style={{ flex: 1, position: 'relative' }}>
          {isPlaying && (
            <div
              aria-hidden="true"
              style={{
                left: `${progress}%`,
                position: 'absolute',
                top: '-20px',
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap',
              }}
            >
              {musicNotes.map(([note, color, delay, offset]) => (
                <span
                  key={`${note}-${delay}`}
                  style={{
                    animation: `musicNoteJump 700ms ease-in-out ${delay} infinite alternate`,
                    color,
                    display: 'inline-block',
                    fontSize: '18px',
                    marginLeft: `${offset}px`,
                  }}
                >
                  {note}
                </span>
              ))}
            </div>
          )}
          <input
            aria-label="Tiến trình nhạc"
            max={duration || 0}
            min="0"
            onChange={seekMusic}
            step="0.1"
            style={{ width: '100%' }}
            type="range"
            value={currentTime}
          />
        </div>
        <span style={{ fontSize: '12px', minWidth: '34px' }}>{formatTime(duration)}</span>
      </div>
      <style>{`
        @keyframes musicNoteJump {
          from { transform: translateY(0) rotate(-8deg); }
          to { transform: translateY(-5px) rotate(8deg); }
        }
      `}</style>
    </>
  );
}

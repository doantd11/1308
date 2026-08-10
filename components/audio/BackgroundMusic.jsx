import { useEffect, useRef, useState } from 'react';
import backgroundAudio from '../../audio/Nơi Này Có Anh.mp3';

const musicNotes = [
  ['♪', '#f87171'],
  ['♫', '#facc15'],
  ['♬', '#4ade80'],
  ['♪', '#60a5fa'],
  ['♩', '#c084fc'],
  ['♫', '#fb923c'],
];

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeNote, setActiveNote] = useState(null);
  const activeNoteRef = useRef(null);
  const noteIdRef = useRef(0);
  const progressRef = useRef(0);

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

  const spawnNote = () => {
    const [note, color] = musicNotes[Math.floor(Math.random() * musicNotes.length)];
    const nextNote = {
      color,
      id: noteIdRef.current++,
      note,
      progress: progressRef.current,
    };
    activeNoteRef.current = nextNote;
    setActiveNote(nextNote);
  };

  useEffect(() => {
    if (!isPlaying) return undefined;

    if (!activeNoteRef.current) spawnNote();
    const interval = window.setInterval(spawnNote, 900);
    return () => window.clearInterval(interval);
  }, [isPlaying]);

  const progress = duration ? Math.min(100, (currentTime / duration) * 100) : 0;
  progressRef.current = progress;

  return (
    <>
      <audio
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
        src={backgroundAudio}
      />
      <div
        style={{
          alignItems: 'center',
          background: '#fefeff',
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
        <div style={{ flex: 1, position: 'relative' }}>
          {activeNote && (
            <div
              aria-hidden="true"
              style={{
                left: `${activeNote.progress}%`,
                marginLeft: '20px',
                position: 'absolute',
                top: '-36px',
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                key={activeNote.id}
                onAnimationEnd={() => {
                  if (activeNoteRef.current?.id === activeNote.id) {
                    activeNoteRef.current = null;
                    setActiveNote(null);
                  }
                }}
                style={{
                  animation: 'musicNoteRise 700ms ease-out forwards',
                  animationPlayState: isPlaying ? 'running' : 'paused',
                  color: activeNote.color,
                  display: 'inline-block',
                  fontSize: '36px',
                }}
              >
                {activeNote.note}
              </span>
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
      </div>
      <style>{`
        @keyframes musicNoteRise {
          from { opacity: 1; transform: translateY(0) rotate(-8deg); }
          to { opacity: 0; transform: translateY(-5px) rotate(8deg); }
        }
      `}</style>
    </>
  );
}

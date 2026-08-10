export default function LetterTemp({ image, onClose }) {
  return (
    <div
      aria-label="Letter popup"
      className="letter-overlay"
      onClick={onClose}
      role="dialog"
    >
      <div className="letter" onClick={(event) => event.stopPropagation()}>
        <button aria-label="Close letter" className="letter-close" onClick={onClose} type="button">
          ×
        </button>
        <div className="letter-sticker">
          <img alt="" src={image} />
        </div>
        <div className="letter-lines" aria-hidden="true">
          {Array.from({ length: 12 }, (_, index) => (
            <div className="letter-line" key={index} />
          ))}
        </div>
      </div>
      <style>{`
        .letter-overlay {
          align-items: center;
          background: rgb(17 24 39 / 55%);
          display: flex;
          inset: 0;
          justify-content: center;
          padding: 24px;
          position: fixed;
          z-index: 10;
        }

        .letter {
          background: #fffdf5;
          border: 1px solid #d6c8a8;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgb(0 0 0 / 25%);
          height: min(800px, calc(100vh - 48px));
          overflow: hidden;
          position: relative;
          width: min(1300px, calc(100vw - 48px));
        }

        .letter-close {
          background: #111827;
          border: 0;
          border-radius: 999px;
          color: #fff;
          cursor: pointer;
          font-size: 24px;
          height: 36px;
          line-height: 1;
          position: absolute;
          right: 18px;
          top: 18px;
          width: 36px;
          z-index: 1;
        }

        .letter-sticker {
          align-items: center;
          display: flex;
          height: 80px;
          justify-content: center;
          left: 50px;
          position: absolute;
          top: 50px;
          width: 80px;
        }

        .letter-sticker img {
          height: 100px;
          object-fit: contain;
          width: 100px;
        }

        .letter-lines {
          display: flex;
          flex-direction: column;
          gap: 32px;
          left: 140px;
          position: absolute;
          right: 80px;
          top: 150px;
        }

        .letter-line {
          border-bottom: 1px solid #c9d2df;
          height: 28px;
        }
      `}</style>
    </div>
  );
}
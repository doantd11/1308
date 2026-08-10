import LetterTemp from '../temp/LetterTemp';
import loveImage from '../../images/sticker/Love.png';

export default function LovePopup({ onClose }) {
  return <LetterTemp image={loveImage} onClose={onClose} />;
}

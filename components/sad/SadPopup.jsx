import LetterTemp from '../temp/LetterTemp';
import sadImage from '../../images/sticker/Sad.png';

export default function SadPopup({ onClose }) {
  return <LetterTemp image={sadImage} onClose={onClose} />;
}

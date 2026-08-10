import LetterTemp from '../temp/LetterTemp';
import hateImage from '../../images/sticker/Hate.png';

export default function HatePopup({ onClose }) {
  return <LetterTemp image={hateImage} onClose={onClose} />;
}

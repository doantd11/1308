import LetterTemp from '../temp/LetterTemp';
import likeImage from '../../images/sticker/Like.png';

export default function LikePopup({ onClose }) {
  return <LetterTemp image={likeImage} onClose={onClose} />;
}

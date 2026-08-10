import ButtonTemp from '../temp/ButtonTemp';
import likeImage from '../../images/sticker/Like.png';

export default function LikeButton(props) {
  return <ButtonTemp {...props} image={likeImage} label="Like" />;
}

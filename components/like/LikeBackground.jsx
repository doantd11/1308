import BackgroundTemp from '../temp/BackgroundTemp';
import likeImage from '../../images/sticker/Like.png';

export default function LikeBackground(props) {
  return <BackgroundTemp {...props} image={likeImage} />;
}

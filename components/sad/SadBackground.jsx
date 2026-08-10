import BackgroundTemp from '../temp/BackgroundTemp';
import sadImage from '../../images/sticker/Sad.png';

export default function SadBackground(props) {
  return <BackgroundTemp {...props} image={sadImage} />;
}

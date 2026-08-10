import ButtonTemp from '../temp/ButtonTemp';
import loveImage from '../../images/sticker/Love.png';

export default function LoveButton(props) {
  return <ButtonTemp {...props} image={loveImage} label="I Love you" />;
}

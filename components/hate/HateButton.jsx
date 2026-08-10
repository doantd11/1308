import ButtonTemp from '../temp/ButtonTemp';
import hateImage from '../../images/sticker/Hate.png';

export default function HateButton(props) {
  return <ButtonTemp {...props} image={hateImage} label="I Hate you" />;
}

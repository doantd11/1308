import ButtonTemp from '../temp/ButtonTemp';
import sadImage from '../../images/sticker/Sad.png';

export default function SadButton(props) {
  return <ButtonTemp {...props} image={sadImage} label="I Sad You Because" />;
}

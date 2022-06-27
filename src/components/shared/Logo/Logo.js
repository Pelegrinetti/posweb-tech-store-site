import { Image } from '@chakra-ui/react';
import LogoImage from './Logo.svg';

function Logo(props) {
  const { size = '40%' } = props;

  return <Image src={LogoImage.src} width={size} alt="Tech Store logo" />;
}

export default Logo;

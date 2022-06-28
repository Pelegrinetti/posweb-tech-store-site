import { Image, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import LogoImage from './Logo.svg';

function Logo() {
  return (
    <NextLink href="/" passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link borderRadius={2}>
        <Image src={LogoImage.src} width="10rem" alt="Tech Store logo" />
      </Link>
    </NextLink>
  );
}

export default Logo;

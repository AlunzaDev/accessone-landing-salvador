interface BrandLogoProps {
  background?: 'light' | 'dark';
}

const logos = {
  light: '/elsalvador@4x.png',
  dark: '/salvadorclaro@4x.png',
};

export default function BrandLogo({ background = 'light' }: BrandLogoProps) {
  return <img src={logos[background]} alt="AccessOne Parking El Salvador" />;
}

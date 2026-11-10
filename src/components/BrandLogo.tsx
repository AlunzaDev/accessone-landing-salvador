interface BrandLogoProps {
  background?: 'light' | 'dark';
}

const logos = {
  light: '/Recurso 11@4x (1).png',
  dark: '/Recurso 10@4x (1).png',
};

export default function BrandLogo({ background = 'light' }: BrandLogoProps) {
  return <img src={logos[background]} alt="AccessOne Parking Centroamérica" />;
}

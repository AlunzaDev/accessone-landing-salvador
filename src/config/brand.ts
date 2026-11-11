import type { LandingBrandConfig, NavigationLink } from '@alunzadev/accessone-ui';

export const brand: LandingBrandConfig = {
  name: 'AccessOne Parking El Salvador',
  region: 'El Salvador',
  locale: 'es-SV',
  logos: {
    onLight: '/elsalvador@4x.png',
    onDark: '/salvadorclaro@4x.png',
  },
};

export const navigation: readonly NavigationLink[] = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/factura', label: 'Obtené tu factura' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/aviso-de-privacidad', label: 'Aviso de privacidad' },
];


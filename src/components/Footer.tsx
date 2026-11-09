import BrandLogo from './BrandLogo';

export default function Footer() {
  return <footer><a className="brand" href="/"><BrandLogo background="dark" /></a><p>AccessOne Parking El Salvador</p><span>© {new Date().getFullYear()}</span></footer>;
}

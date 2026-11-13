import Header from './Header';
import Footer from './Footer';
import { ServiceCard, type IconName } from '@alunzadev/accessone-ui';
import CountUp from './CountUp';
import '@alunzadev/accessone-ui/styles/media.css';
import '@alunzadev/accessone-ui/styles/service-card.css';
import '@alunzadev/accessone-ui/styles/landing.css';
import './landing.css';
import '@alunzadev/accessone-ui/styles/glass.css';

function MetricValue({ value }: { value: string }) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  if (!match) return <>{value}</>;
  const [, prefix, digits, suffix] = match;
  return <CountUp value={Number(digits.replace(/,/g, ''))} prefix={prefix} suffix={suffix} />;
}

const mexicoMetrics = [
  ['+35', 'años de experiencia'],
  ['+30,000', 'espacios de estacionamiento'],
  ['+300', 'carriles operados'],
  ['+300', 'colaboradores calificados'],
  ['+35 M', 'de usuarios atendidos al año'],
  ['+40', 'proyectos en operación'],
];

const homeServices: [IconName, string, string][] = [
  ['access', 'Control de accesos', 'Tecnología y procesos para ordenar el ingreso y salida de vehículos.'],
  ['parking', 'Operación de parqueos', 'Administración profesional enfocada en eficiencia, seguridad y servicio.'],
  ['maintenance', 'Mantenimiento', 'Programas preventivos y correctivos para conservar cada espacio en buen estado.'],
  ['support', 'Servicios al usuario', 'Limpieza, asistencia básica, apoyo vial y atención dentro del parqueo.'],
  ['design', 'Diseño y equipamiento', 'Conceptualización, obra e integración de equipos de control de acceso.'],
];

export default function Landing() {
  return <div className="shell">
    <section className="scene-zero" id="inicio" aria-labelledby="scene-zero-title">
      <div className="scene-zero-copy"><h1 id="scene-zero-title">Diseño, mantenimiento y operación de parqueos</h1></div>
      <a className="scene-zero-scroll" href="#experiencia" aria-label="Continuar a la siguiente sección">Descubrí más <span>↓</span></a>
    </section>
    <Header revealAfterScene />
    <main>
      <section className="home-proof" id="experiencia" aria-labelledby="home-proof-title">
        <div className="home-proof-heading"><div><p className="tag">Trayectoria construida en México</p><h2 id="home-proof-title">Experiencia que ahora ponemos al servicio de El Salvador.</h2></div><p>Estas cifras corresponden a la operación y experiencia desarrollada por AccessOne en México. Son el respaldo con el que iniciamos esta nueva etapa para acompañar proyectos salvadoreños.</p></div>
        <div className="home-metrics">{mexicoMetrics.map(([value,label]) => <article key={label}><strong><MetricValue value={value} /></strong><span>{label}</span><small>México</small></article>)}</div>
      </section>
      <section className="home-offer">
        <div className="home-offer-copy"><p className="tag">¿Qué ofrecemos?</p><h2>De la idea a una operación que funciona.</h2><p>Acompañamos cada proyecto desde la asesoría y conceptualización hasta la construcción, instalación y operación del parqueo.</p><a href="/nosotros">Conocé AccessOne <b>↗</b></a></div>
        <div className="home-offer-list"><article><span>01</span><div><h3>Planeación y diseño</h3><p>Proyecto arquitectónico, obra civil, instalaciones eléctricas, red y voz.</p></div></article><article><span>02</span><div><h3>Tecnología y ejecución</h3><p>Equipos de control, implementación, estandarización de procesos y puesta en marcha.</p></div></article><article><span>03</span><div><h3>Operación y mejora</h3><p>Administración profesional orientada a la seguridad, imagen, ahorro y rentabilidad.</p></div></article></div>
      </section>
      <section className="accessone-media-section accessone-media-section--navy" aria-labelledby="home-video-title">
        <div className="accessone-media-section__heading"><div><p className="tag">AccessOne en operación</p><h2 id="home-video-title">Así se ve una operación que funciona.</h2></div><p>Un recorrido por nuestros estacionamientos: accesos, tecnología y equipo en acción.</p></div>
        <video className="accessone-real-video" controls preload="metadata" poster="/HEATER.png" playsInline>
          <source src="/MANTENIMIENTO.mp4" type="video/mp4" />
          Tu navegador no puede reproducir este video.
        </video>
      </section>
      <section className="home-services" aria-labelledby="home-services-title">
        <div className="home-section-heading"><div><p className="tag">Servicios en El Salvador</p><h2 id="home-services-title">Soluciones para cada punto de la experiencia.</h2></div><a href="/servicios">Ver todos los servicios <b>→</b></a></div>
        <div className="home-service-grid">{homeServices.map(([icon,title,text]) => <ServiceCard key={title} icon={icon} title={title} description={text} />)}</div>
      </section>
      <section className="accessone-media-section" aria-labelledby="home-gallery-title">
        <div className="accessone-media-section__heading"><div><p className="tag">Proyectos</p><h2 id="home-gallery-title">Espacios que operamos todos los días.</h2></div><p>Galería de proyectos: centros comerciales, hospitales, clubes y más.</p></div>
        <div className="accessone-real-gallery">
          <figure><img src="/HEATER.png" alt="Estacionamiento operado por AccessOne" loading="lazy" /></figure>
          <figure><img src="/ACCESO.png" alt="Control de acceso vehicular" loading="lazy" /></figure>
          <figure><img src="/OPERACION DE ESTACIONAMIENTO.png" alt="Operación de estacionamiento" loading="lazy" /></figure>
          <figure><img src="/TECNOLOGIA.png" alt="Tecnología para control de estacionamientos" loading="lazy" /></figure>
          <figure><img src="/2.png" alt="Control de acceso mediante torniquetes" loading="lazy" /></figure>
        </div>
      </section>
      <section className="home-cta"><p className="tag">AccessOne El Salvador</p><h2>Convirtamos cada acceso en una mejor experiencia.</h2><p>Contanos qué necesita tu parqueo y construyamos una solución a la medida.</p><a href="/contacto">Hablemos de tu proyecto <b>↗</b></a></section>
    </main>
    <Footer />
  </div>;
}

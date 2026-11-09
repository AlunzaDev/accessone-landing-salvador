import Header from './Header';
import Footer from './Footer';
import './landing.css';

const mexicoMetrics = [
  ['+35', 'años de experiencia'],
  ['+30,000', 'espacios de estacionamiento'],
  ['+300', 'carriles operados'],
  ['+300', 'colaboradores calificados'],
  ['+35 M', 'de usuarios atendidos al año'],
  ['+40', 'proyectos en operación'],
];

const homeServices = [
  ['01', 'Control de accesos', 'Tecnología y procesos para ordenar el ingreso y salida de vehículos.'],
  ['02', 'Operación de parqueos', 'Administración profesional enfocada en eficiencia, seguridad y servicio.'],
  ['03', 'Valet parking', 'Recepción y entrega de vehículos con personal capacitado y control operativo.'],
  ['04', 'Mantenimiento', 'Programas preventivos y correctivos para conservar cada espacio en buen estado.'],
  ['05', 'Servicios al usuario', 'Limpieza, asistencia básica, apoyo vial y atención dentro del parqueo.'],
  ['06', 'Diseño y equipamiento', 'Conceptualización, obra e integración de equipos de control de acceso.'],
];

export default function Landing() {
  return <div className="shell">
    <section className="scene-zero" id="inicio" aria-labelledby="scene-zero-title">
      <div className="scene-zero-copy"><p>AccessOne Parking El Salvador</p><h1 id="scene-zero-title">Diseño, mantenimiento y operación de parqueos</h1></div>
      <a className="scene-zero-scroll" href="#experiencia" aria-label="Continuar a la siguiente sección">Descubre más <span>↓</span></a>
    </section>
    <Header revealAfterScene />
    <main>
      <section className="home-proof" id="experiencia" aria-labelledby="home-proof-title">
        <div className="home-proof-heading"><div><p className="tag">Trayectoria construida en México</p><h2 id="home-proof-title">Experiencia que ahora ponemos al servicio de El Salvador.</h2></div><p>Estas cifras corresponden a la operación y experiencia desarrollada por AccessOne en México. Son el respaldo con el que iniciamos esta nueva etapa para atender proyectos salvadoreños.</p></div>
        <div className="home-metrics">{mexicoMetrics.map(([value,label]) => <article key={label}><strong>{value}</strong><span>{label}</span><small>México</small></article>)}</div>
      </section>
      <section className="home-offer">
        <div className="home-offer-copy"><p className="tag">¿Qué ofrecemos?</p><h2>De la idea a una operación que funciona.</h2><p>Acompañamos cada proyecto desde la asesoría y conceptualización hasta la construcción, instalación y operación del parqueo.</p><a href="/nosotros">Conoce AccessOne <b>↗</b></a></div>
        <div className="home-offer-list"><article><span>01</span><div><h3>Planeación y diseño</h3><p>Proyecto arquitectónico, obra civil, instalaciones eléctricas, red y voz.</p></div></article><article><span>02</span><div><h3>Tecnología y ejecución</h3><p>Equipos de control, implementación, estandarización de procesos y puesta en marcha.</p></div></article><article><span>03</span><div><h3>Operación y mejora</h3><p>Administración profesional orientada a la seguridad, imagen, ahorro y rentabilidad.</p></div></article></div>
      </section>
      <section className="home-services" aria-labelledby="home-services-title">
        <div className="home-section-heading"><p className="tag">Servicios en El Salvador</p><h2 id="home-services-title">Soluciones para cada punto de la experiencia.</h2><a href="/servicios">Ver todos los servicios <b>→</b></a></div>
        <div className="home-service-grid">{homeServices.map(([number,title,text]) => <a href="/servicios" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p><b aria-hidden="true">↗</b></a>)}</div>
      </section>
      <section className="home-cta"><p className="tag">AccessOne El Salvador</p><h2>Convirtamos cada acceso en una mejor experiencia.</h2><p>Contanos qué necesita tu parqueo y construyamos una solución a la medida.</p><a href="/contacto">Hablemos de tu proyecto <b>↗</b></a></section>
    </main>
    <Footer />
  </div>;
}

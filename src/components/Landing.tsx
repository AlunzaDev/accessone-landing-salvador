import { useState } from 'react';
import './landing.css';

const services = [
  ['01', 'Operación integral', 'Coordinamos accesos, salidas, equipos y atención para que cada recorrido sea simple.'],
  ['02', 'Valet parking', 'Recibimos cada vehículo con protocolos claros y una experiencia cordial.'],
  ['03', 'Mantenimiento', 'Cuidamos infraestructura y sistemas de control para mantener la operación activa.'],
  ['04', 'Servicios de apoyo', 'Limpieza, vigilancia, apoyo vial y mecánica básica para resolver lo cotidiano.'],
];

export default function Landing() {
  const [open, setOpen] = useState(false);
  return <div className="site-shell">
    <header className="header">
      <a className="brand" href="#inicio" aria-label="AccessOne El Salvador, inicio">
        <span className="brand-mark">A1</span><span>ACCESS<span>ONE</span><small>EL SALVADOR</small></span>
      </a>
      <button className="menu" aria-expanded={open} aria-label="Abrir menú" onClick={() => setOpen(!open)}>{open ? 'Cerrar' : 'Menú'}</button>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Navegación principal">
        <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
        <a href="#metodo" onClick={() => setOpen(false)}>Cómo trabajamos</a>
        <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
      </nav>
      <a className="header-cta" href="#contacto">Hablemos <span>↗</span></a>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Movilidad urbana · El Salvador</p>
          <h1>Tu llegada<br/>debe sentirse<br/><em>así de fácil.</em></h1>
          <p className="lead">Diseñamos y operamos estacionamientos que hacen fluir a las personas, los vehículos y los negocios.</p>
          <div className="actions"><a className="primary" href="#contacto">Conversemos <span>→</span></a><a className="text-link" href="#servicios">Explorar servicios ↓</a></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun"></div><div className="route route-a"></div><div className="route route-b"></div>
          <div className="ticket"><span>ACCESO</span><b>BIENVENIDO</b><small>Una operación que fluye</small><i>→</i></div>
          <span className="car car-one">●</span><span className="car car-two">●</span>
        </div>
      </section>

      <section className="statement">
        <p>Más que guardar vehículos</p>
        <h2>Cuidamos el primer y el último momento de cada visita.</h2>
        <div className="pill-row"><span>Seguridad</span><span>Agilidad</span><span>Buena atención</span><span>Operación continua</span></div>
      </section>

      <section className="services" id="servicios">
        <div className="section-head"><p className="eyebrow">Lo que hacemos</p><h2>Todo lo necesario<br/>para <em>mover mejor.</em></h2></div>
        <div className="service-list">{services.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><b>↗</b></article>)}</div>
      </section>

      <section className="method" id="metodo">
        <div className="method-copy"><p className="eyebrow">Nuestro método</p><h2>Entender.<br/>Diseñar.<br/><em>Operar.</em></h2><p>Cada espacio tiene ritmos y necesidades distintas. Partimos del sitio real para crear una solución clara, rentable y sostenible en el tiempo.</p></div>
        <ol><li><span>01</span><div><b>Diagnóstico</b><p>Observamos flujos, infraestructura y puntos de fricción.</p></div></li><li><span>02</span><div><b>Solución</b><p>Definimos operación, equipo, imagen y plan de puesta en marcha.</p></div></li><li><span>03</span><div><b>Mejora continua</b><p>Medimos la experiencia y ajustamos la operación.</p></div></li></ol>
      </section>

      <section className="contact" id="contacto">
        <p className="eyebrow">El siguiente movimiento</p><h2>Hagamos que tu<br/>estacionamiento <em>fluya.</em></h2><p>Cuéntanos sobre tu proyecto en El Salvador. Los datos de contacto oficiales se incorporarán antes del lanzamiento.</p><a href="mailto:contacto@example.com">Iniciar conversación <span>↗</span></a>
      </section>
    </main>
    <footer><a className="brand" href="#inicio"><span className="brand-mark">A1</span><span>ACCESS<span>ONE</span></span></a><p>Propuesta de landing · Contenido de contacto provisional</p><span>© {new Date().getFullYear()}</span></footer>
  </div>;
}

import { useState } from 'react';

const sections = [
  {
    id: 'mision',
    number: '01',
    title: 'Misión',
    eyebrow: 'Nuestro propósito',
    content: <>
      <p>Satisfacer las necesidades de administración y operación de nuestros clientes: centros comerciales, parqueos, servicios de valet parking, consumidores de tecnología y equipo de control de acceso de cualquier tipo.</p>
      <p>Brindar siempre un servicio de calidad, enfocado en proporcionar atención de primer nivel y excelencia, teniendo como objetivo ser rentables y productivos, haciendo del cliente nuestra prioridad.</p>
      <p>Actuar con dinamismo en la resolución de los retos de los servicios contratados, ajustándonos en todo momento a las peticiones y necesidades de nuestros clientes.</p>
    </>,
  },
  {
    id: 'vision',
    number: '02',
    title: 'Visión',
    eyebrow: 'Hacia dónde vamos',
    content: <>
      <p>Ser una empresa competitiva a nivel mundial, brindando el mejor servicio de administración y operación de centros comerciales, parqueos y valet parking, así como la venta de tecnología para control de acceso.</p>
      <p>Tener un crecimiento sostenido mediante la búsqueda de la excelencia y la mejora continua, siendo día con día una empresa más productiva y rentable.</p>
    </>,
  },
  {
    id: 'filosofia',
    number: '03',
    title: 'Filosofía',
    eyebrow: 'Lo que nos sostiene',
    content: <>
      <p>Todo el personal de AccessOne debe tener una calidad de vida digna y estabilidad laboral, teniendo siempre sólidos los siguientes valores:</p>
      <ul><li>Honestidad</li><li>Lealtad</li><li>Responsabilidad</li><li>La familia</li><li>Transparencia</li></ul>
      <p>Valores que AccessOne comparte con todos sus clientes y colaboradores.</p>
    </>,
  },
  {
    id: 'valor-agregado',
    number: '04',
    title: 'Valor agregado',
    eyebrow: 'Más allá de la operación',
    content: <>
      <p>Planeación y elaboración de proyectos.</p>
      <ul><li>Ejecución de obra civil, eléctrica, red y voz.</li><li>Campaña de inicio de operaciones.</li><li>Imagen corporativa estandarizada.</li><li>Estandarización de procesos.</li><li>Inversión inicial.</li><li>Operación y mantenimiento de equipos de control de parqueo de diversas marcas.</li></ul>
    </>,
  },
];

export default function IdentityTabs() {
  const [index, setIndex] = useState(0);
  const active = sections[index];
  const go = (next: number, focus = false) => {
    const i = (next + sections.length) % sections.length;
    setIndex(i);
    if (focus) requestAnimationFrame(() => document.getElementById(`tab-${sections[i].id}`)?.focus());
  };

  return <section className="identity" aria-labelledby="identity-title">
    <div className="identity-heading"><p className="tag">Lo que nos define</p><h2 id="identity-title">Conoce nuestra esencia.</h2><p>Recorre cada principio a tu ritmo para descubrir cómo pensamos, trabajamos y generamos valor.</p></div>
    <div className="essence">
      <div className="essence-nav" role="tablist" aria-label="Identidad AccessOne">
        {sections.map((section, i) => <button key={section.id} role="tab" id={`tab-${section.id}`} aria-selected={i === index} aria-controls={`panel-${section.id}`} tabIndex={i === index ? 0 : -1} onClick={() => go(i)} onKeyDown={(e) => { if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); go(index + 1, true); } if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); go(index - 1, true); } }}><span>{section.number}</span>{section.title}</button>)}
      </div>
      <article className="essence-card" role="tabpanel" id={`panel-${active.id}`} aria-labelledby={`tab-${active.id}`} key={active.id}>
        <div className="essence-head"><b>{active.number}</b><h3>{active.title}</h3><em>{active.eyebrow}</em></div>
        <div className="essence-body">{active.content}</div>
      </article>
    </div>
  </section>;
}

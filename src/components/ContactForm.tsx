import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-heading"><p className="tag">Contanos sobre tu proyecto</p><h2>Empecemos la conversación.</h2><p>Dejanos tus datos y el equipo de AccessOne El Salvador podrá darle seguimiento cuando se habilite el canal oficial.</p></div>
    <div className="form-grid">
      <label><span>Nombre completo</span><input type="text" name="nombre" placeholder="Ej. Andrea López" autoComplete="name" required /></label>
      <label><span>Empresa</span><input type="text" name="empresa" placeholder="Ej. Centro Comercial San Salvador" autoComplete="organization" /></label>
      <label><span>Correo electrónico</span><input type="email" name="correo" placeholder="nombre@empresa.com.sv" autoComplete="email" required /></label>
      <label><span>Teléfono</span><input type="tel" name="telefono" placeholder="+503 0000 0000" autoComplete="tel" required /></label>
      <label className="form-wide"><span>¿En qué podemos apoyarte?</span><select name="servicio" defaultValue="" required><option value="" disabled>Selecciona un servicio</option><option>Operación de parqueos</option><option>Control de accesos y salidas</option><option>Mantenimiento</option><option>Valet parking</option><option>Tecnología y equipamiento</option><option>Otro servicio</option></select></label>
      <label className="form-wide"><span>Contanos un poco más</span><textarea name="mensaje" rows={5} placeholder="Describí el proyecto, la ubicación y sus necesidades principales…" required></textarea></label>
    </div>
    <div className="form-footer"><p>Este formulario es una demostración y todavía no envía información.</p><button type="submit">Enviar solicitud <b>↗</b></button></div>
    {submitted && <p className="form-notice" role="status">¡Gracias! El formulario quedó validado. El envío se habilitará cuando tengamos los datos oficiales del equipo en El Salvador.</p>}
  </form>;
}

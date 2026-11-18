document.addEventListener('DOMContentLoaded', () => {
  const path = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('header').forEach((header) => {
    const button = header.querySelector('.menu');
    const nav = header.querySelector('nav');
    nav?.querySelectorAll('a').forEach((link) => {
      const href = new URL(link.href).pathname.replace(/\/$/, '') || '/';
      if (href === path) link.setAttribute('aria-current', 'page');
    });
    button?.addEventListener('click', () => {
      const open = !nav?.classList.contains('open');
      nav?.classList.toggle('open', open);
      button.setAttribute('aria-expanded', String(open));
      button.textContent = open ? 'Cerrar' : 'Menú';
    });
    nav?.addEventListener('click', () => {
      nav.classList.remove('open');
      button?.setAttribute('aria-expanded', 'false');
      if (button) button.textContent = 'Menú';
    });
    if (header.classList.contains('home-header')) {
      const update = () => {
        header.classList.toggle('is-visible', scrollY >= innerHeight - 150);
        header.classList.toggle('is-docked', scrollY >= innerHeight);
      };
      update();
      addEventListener('scroll', update, { passive: true });
      addEventListener('resize', update, { passive: true });
    }
  });
});

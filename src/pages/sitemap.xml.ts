import type { APIRoute } from 'astro';

const routes = ['/', '/servicios/', '/nosotros/', '/contacto/'];

export const GET: APIRoute = () => {
  const urls = routes.map((path) => `<url><loc>https://accessone.com.sv${path}</loc><changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq><priority>${path === '/' ? '1.0' : '0.8'}</priority></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

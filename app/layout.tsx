import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Solución Técnologica | Desarrollo Web, Automatización & Soporte TI',
  description: 'Soluciones digitales profesionales para pequeños y medianos negocios: desarrollo de landing pages de alta conversión, automatización de procesos y soporte técnico.',
  openGraph: {
    title: 'Solución Técnologica| Desarrollo Web, Automatización & Soporte TI',
    description: 'Soluciones digitales profesionales para pequeños y medianos negocios: desarrollo de landing pages de alta conversión, automatización de procesos y soporte técnico.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solución Técnologica | Desarrollo Web, Automatización & Soporte TI',
    description: 'Soluciones digitales profesionales para pequeños y medianos negocios: desarrollo de landing pages de alta conversión, automatización de procesos y soporte técnico.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className="bg-[#090d16] text-[#e2e8f0] antialiased selection:bg-[#00dce5]/25 selection:text-[#00f5ff]">
        {children}
      </body>
    </html>
  );
}

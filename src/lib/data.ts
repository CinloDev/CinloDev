import { Code, Megaphone, Linkedin, Github, InstagramIcon, BriefcaseBusiness } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export const navLinks = [
  { href: '#services', label: 'Servicios' },
  { href: '#work', label: 'Trabajos' },
  { href: '#about', label: 'Sobre Mí' },
  { href: '#testimonials', label: 'Testimonios' },
  { href: '#contact', label: 'Contacto' },
];

export const services = [
  {
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Construyo sitios web modernos, responsivos y de alto rendimiento desde cero, garantizando una experiencia de usuario fluida en todos los dispositivos. Desde páginas de destino hasta complejas aplicaciones web.',
  },
  {
    icon: Megaphone,
    title: 'Contenido para Redes Sociales',
    description: 'Creo contenido atractivo y estratégico para tus canales de redes sociales. Mis servicios incluyen planificación de contenido, diseño gráfico y redacción para potenciar tu presencia online y conectar con tu audiencia.',
  },
];

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export const portfolioProjects = [
  {
    id: '1',
    title: 'Landing Page Roma: Masajes y Reiki',
    description: 'Sitio web para Roma Masajes y Reiki, un espacio dedicado al bienestar, la relajación y el equilibrio personal.',
    tags: ['HTML', 'JavaScript', 'CSS'],
    image: getImage('work-1'),
    liveUrl: 'https://roma-masajes-reiki.netlify.app/',
  },
  {
    id: '2',
    title: 'Page de peliculas con API REST',
    description: 'Proyecto práctico que consume una API REST de películas utilizando JavaScript. Muestra datos en tiempo real con un diseño simple y responsivo',
    tags: ['HTML', 'CSS', 'Javascript'],
    image: getImage('work-2'),
    liveUrl: 'https://cinlo82.github.io/api-rest-js-practico/',
  },
  {
    id: '3',
    title: 'Travel Landing Page',
    description: 'Landing page para viajes, diseñada con Tailwind CSS. Ofrece un diseño atractivo y responsivo, destacando destinos y servicios turísticos de manera clara.',
    tags: ['JavaScript', 'Tailwind CSS', 'HTML5'],
    image: getImage('work-3'),
    liveUrl: 'https://cinlo82.github.io/travel-tailwind/',
  },
  {
    id: '4',
    title: 'Web sobre calendario y Regalos de Stardew Valley',
    description: 'Sitio web dedicado a los regalos en Stardew Valley, donde se pueden encontrar detalles sobre los personajes y sus preferencias. Se guardan los datos en localStorage para mejorar la experiencia del usuario.',
    tags: ['JavaScript', 'CSS', 'HTML5'],
    image: getImage('work-4'),
    liveUrl: 'https://calendario-stardew.netlify.app/',
  },
  {
    id: '5',
    title: 'Diseño de Marca y Estrategia de Contenido para marca de Tejido',
    description: 'Creé una identidad de marca completa, incluyendo logo, paleta de colores y tipografía, junto con una estrategia de contenido para redes sociales que aumentó la visibilidad y el engagement de la marca.',
    tags: ['Estrategia de Contenido', 'Branding', 'Instagram'],
    image: getImage('work-5'),
    liveUrl: 'https://www.instagram.com/tejiendo_con_ranchesca/',
  },
  {
    id: '6',
    title: 'Portafolio Personal sobre Desarrollo Web',
    description: 'Mi portafolio personal que combina mis habilidades en desarrollo web y diseño, utilizando Astro y Tailwind CSS para crear una experiencia rápida y atractiva que destaca mis proyectos y servicios.',
    tags: ['Astro', 'Tailwind CSS', 'TypeScript', 'React'],
    image: getImage('work-6'),
    liveUrl: 'https://cintialosada-portfolio.netlify.app/',
  },
];

export const testimonials = [
{
    quote: "El trabajo con Tejiendo con Ranchesca fue mágico. Cintia supo dar vida a un espacio digital donde el tejido se siente cercano y auténtico. Mis redes crecieron y los seguidores valoran cada publicación.",
    author: "Ranchesca",
    company: "Creadora de Tejiendo con Ranchesca",
  },
   {
    quote: "Gracias a la página y la identidad digital que creó para Roma, logramos transmitir la esencia de nuestros masajes y sesiones de reiki. Ahora más personas nos encuentran y se conectan con nuestros servicios.",
    author: "Romina Cristi",
    company: "Fundadora, Roma Masajes y Reiki",
  },
  {
    quote: "Cintia entendió perfectamente lo que necesitábamos y lo convirtió en una web moderna y funcional. Supo combinar diseño y tecnología de una forma increíble. ¡Estamos felices con el resultado!",
    author: "Mariana López",
    company: "Fundadora, EcoVida",
  },
  {
    quote: "Trabajar con Cintia fue como tener una socia estratégica. No solo creó un sitio web hermoso, sino que también nos guió en cómo aprovecharlo para atraer más clientes.",
    author: "Carlos Méndez",
    company: "CEO, Mercado Local",
  },
  {
    quote: "La gestión de redes sociales que desarrolló fue un antes y un después para nuestra marca. En pocas semanas vimos más interacción, seguidores genuinos y clientes interesados.",
    author: "Lucía Fernández",
    company: "Directora, Artesanía Única",
  },
  {
    quote: "Lo que más valoro de Cintia es su profesionalismo y compromiso. Siempre estuvo atenta a los detalles y entregó cada etapa del proyecto en tiempo y forma.",
    author: "Diego Romero",
    company: "Gerente de Proyectos, InnovaTech",
  },
 
];


export const aboutMe = {
  description: `Soy Cintia, desarrolladora web full stack con experiencia en frontend y backend, apasionada por la creación de soluciones digitales que combinan diseño, funcionalidad y estrategia.
Trabajo con tecnologías modernas como HTML, CSS, JavaScript, TypeScript, React, Node.js y Tailwind, lo que me permite desarrollar proyectos sólidos, escalables y adaptados a las necesidades de cada cliente.
Además del desarrollo, me interesa la gestión de comunidades digitales y el diseño de marcas, lo que me permite ofrecer un enfoque integral que va más allá del código, conectando empresas y personas en el mundo digital.
Mi objetivo es claro: ayudar a profesionales y emprendedores a potenciar su presencia online, construyendo experiencias digitales que transmitan confianza, generen impacto y aporten valor real.`,
  image: getImage('about-me'),
};

export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/cinlo-losada/',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/CinLo82',
    icon: Github,
  },
  {
    name: 'Portfolio',
    url: 'https://cintialosada-portfolio.netlify.app/',
    icon: BriefcaseBusiness,
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/cinlo82/',
    icon: InstagramIcon,
  }
];

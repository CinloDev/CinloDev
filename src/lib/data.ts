import { Code, Megaphone, Linkedin, Github, InstagramIcon, MessageCircle, Rocket, Users, PenTool, MonitorSmartphone } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';


export const navLinks = [
    { href: '#hero', label: 'Inicio' },
    { href: '#about', label: 'Sobre Mí' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#work', label: 'Trabajos' },
    { href: '#services', label: 'Servicios' },
    { href: '#testimonials', label: 'Testimonios' },
    { href: '#contact', label: 'Contacto' },
];

export const services = [
    {
        title: "Desarrollo Web",
        description: "Diseño y desarrollo de aplicaciones y sitios web modernos, rápidos y escalables, adaptados a objetivos concretos de negocio.",
        icon: Code,
        featured: true,
        includes: [
            'Frontend con React / Next.js',
            'Backend con Node y APIs REST',
            'Diseño responsive y mobile-first',
            'Deploy y configuración inicial',
        ],
    },
    {
        title: "Frontend & Experiencia de Usuario",
        description: "Desarrollo interfaces claras, accesibles y optimizadas, cuidando tanto la estética como la usabilidad y la performance.",
        icon: PenTool,
        includes: [
            'UI con Tailwind',
            'Adaptación de diseños (Figma → código)',
            'Optimización de performance',
            'Buenas prácticas de accesibilidad',
        ],
    },
    {
        title: "Optimización y Mantenimiento",
        description: "Mejoro proyectos existentes para que funcionen mejor, carguen más rápido y sean más fáciles de mantener.",
        icon: Rocket,
        includes: [
            'Refactors',
            'Corrección de bugs',
            'Nuevas funcionalidades',
            'Mejoras de rendimiento',
        ],
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
            liveUrl: 'https://cinlodev.github.io/api-rest-js-practico/',
            githubUrl: 'https://github.com/CinloDev/api-rest-js-practico',
    },
    {
            id: '3',
            title: 'Travel Landing Page',
            description: 'Landing page para viajes, diseñada con Tailwind CSS. Ofrece un diseño atractivo y responsivo, destacando destinos y servicios turísticos de manera clara.',
            tags: ['JavaScript', 'Tailwind CSS', 'HTML5'],
            image: getImage('work-3'),
            liveUrl: 'https://cinlodev.github.io/travel-tailwind/',
            githubUrl: 'https://github.com/CinloDev/travel-tailwind',
    },
    {
            id: '4',
            title: 'Web sobre calendario y Regalos de Stardew Valley',
            description: 'Sitio web dedicado a los regalos en Stardew Valley, donde se pueden encontrar detalles sobre los personajes y sus preferencias. Se guardan los datos en localStorage para mejorar la experiencia del usuario.',
            tags: ['JavaScript', 'CSS', 'HTML5'],
            image: getImage('work-4'),
            liveUrl: 'https://calendario-stardew.netlify.app/',
            githubUrl: 'https://github.com/CinloDev/calendar-stardew/',
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
            githubUrl: 'https://github.com/CinloDev/cinlo-portfolio',
    },
];

export const testimonials = [
    {
        quote: "Destaco el profesionalismo de Cintia y su atención al detalle. Cumplió con los plazos, fue clara en la comunicación y siempre estuvo disponible para resolver dudas. Da gusto trabajar así.",
        author: "Diego Romero",
        company: "Gerente de Proyectos, InnovaTech",
    },
    {
        quote: "Cintia captó enseguida lo que necesitábamos. Nos entregó una web moderna, clara y fácil de usar. El resultado nos encantó y nuestros clientes lo notaron desde el primer momento.",
        author: "Mariana",
        company: "Fundadora, EcoVida",
    },
    {
        quote: "La web y la identidad digital que desarrolló para Roma nos ayudaron muchísimo. Ahora la gente entiende mejor lo que ofrecemos y recibimos más consultas. Nuestra esencia se ve reflejada en cada detalle.",
        author: "Romina",
        company: "Fundadora, Roma Masajes y Reiki",
    },
    {
        quote: "Más que una desarrolladora, Cintia fue una aliada. No solo creó un sitio web atractivo, sino que nos ayudó a entender cómo usarlo para atraer más clientes. Muy recomendable.",
        author: "Carlos Méndez",
        company: "Propietario, Restaurante",
    },
    {
        quote: "Trabajar con Cintia fue una experiencia muy cercana. Supo entender la esencia de mi proyecto y llevarla al entorno digital de forma auténtica. El resultado fue un espacio claro, coherente y con el que la gente conecta de verdad.",
        author: "Ranchesca",
        company: "Creadora de Tejiendo con Ranchesca",
    },
];

export const aboutMe = {
    description: `Soy desarrolladora web con foco en crear productos digitales funcionales, claros y escalables.
Trabajo principalmente con React, Next.js y Node, combinando buenas prácticas de desarrollo con una fuerte atención a la experiencia de usuario.

Vengo del mundo del diseño, lo que me permite entender el producto más allá del código: pienso en performance, mantenibilidad y objetivos reales de negocio.

Actualmente estoy buscando mi primera oportunidad profesional en el mercado tech, idealmente en modalidad remota, donde pueda aportar valor desde el día uno y seguir creciendo como desarrolladora full-stack.`,
    image: getImage('about-me'),
};

export const skillsSection = {
    title: 'Tecnologías y herramientas',
    intro: 'Trabajo con un stack moderno orientado a performance, mantenibilidad y buenas prácticas.',
    columns: [
        {
            title: 'Frontend',
            items: [
                { name: 'React', level: 'Proficient' },
                { name: 'Next.js', level: 'Proficient' },
                { name: 'JavaScript / TypeScript', level: 'Proficient' },
                { name: 'Tailwind CSS', level: 'Proficient' },
                { name: 'HTML · CSS', level: 'Proficient' },
            ],
        },
        {
            title: 'Backend',
            items: [
                { name: 'Node.js', level: 'Working knowledge' },
                { name: 'APIs REST', level: 'Working knowledge' },
                { name: 'Autenticación', level: 'Working knowledge' },
                { name: 'Bases de datos', level: 'Working knowledge' },
            ],
        },
        {
            title: 'Herramientas',
            items: [
                { name: 'Git · GitHub', level: 'Proficient' },
                { name: 'npm', level: 'Proficient' },
                { name: 'Vercel', level: 'Working knowledge' },
                { name: 'Figma', level: 'Familiar' },
            ],
        },
    ],
    levels: ['Proficient', 'Working knowledge', 'Familiar'],
};

export const socialLinks = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/cinlodev/',
        icon: Linkedin,
    },
    {
        name: 'GitHub',
        url: 'https://github.com/CinloDev',
        icon: Github,
    },
    {
        name: 'WhattsApp',
        url: 'https://wa.me/5492212024901',
        icon: MessageCircle,
    },
    {
        name: 'instagram',
        url: 'https://www.instagram.com/cinlo82/',
        icon: InstagramIcon,
    }
];

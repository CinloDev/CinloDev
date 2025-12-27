import { Code, Megaphone, Linkedin, Github, InstagramIcon, MessageCircle, Rocket, Users, PenTool, MonitorSmartphone } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';


export const navLinks = [
    { href: '#hero', label: 'Inicio' },
    { href: '#services', label: 'Servicios' },
    { href: '#work', label: 'Trabajos' },
    { href: '#about', label: 'Sobre Mí' },
    { href: '#testimonials', label: 'Testimonios' },
    { href: '#contact', label: 'Contacto' },
];

export const services = [
    {
        title: "Desarrollo Web",
        description: "Diseño y desarrollo de sitios web modernos, rápidos y seguros, adaptados a tus necesidades y objetivos. Utilizo tecnologías actuales para garantizar una experiencia atractiva y funcional en cualquier dispositivo.",
        icon: Code,
    },
    {
        title: "Lanzamiento de Marca",
        description: "Te ayudo a crear y posicionar tu marca desde cero, definiendo identidad visual, estrategia digital y presencia online para destacar y conectar con tu público objetivo.",
        icon: Rocket,
    },
    {
        title: "Gestión de Redes Sociales",
        description: "Planifico y gestiono tus redes sociales para aumentar tu comunidad, mejorar la interacción y potenciar tu marca. Creo contenido relevante y estrategias que generan resultados reales.",
        icon: Users,
    },
    {
        title: "Diseño Gráfico",
        description: "Desarrollo piezas gráficas profesionales y creativas, desde logos hasta banners y publicaciones, que transmiten la esencia de tu marca y atraen a tus clientes ideales.",
        icon: PenTool,
    },
    {
        title: "Optimización Móvil",
        description: "Me aseguro de que tu sitio y contenido se vean y funcionen perfectamente en dispositivos móviles, mejorando la experiencia de usuario y el alcance de tu marca.",
        icon: MonitorSmartphone,
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
            quote: "Trabajar con Cintia fue una experiencia súper cercana. Supo entender lo que quería transmitir con Tejiendo con Ranchesca y logró que mi espacio digital se sintiera auténtico. Mis redes crecieron y la gente realmente conecta con cada publicación.",
            author: "Ranchesca",
            company: "Creadora de Tejiendo con Ranchesca",
    },
    {
            quote: "La página que hizo para Roma y toda la identidad digital nos ayudó muchísimo. Ahora la gente entiende mejor lo que ofrecemos y llegan más consultas por masajes y reiki. Siento que nuestra esencia se ve reflejada en cada detalle.",
            author: "Romina",
            company: "Fundadora, Roma Masajes y Reiki",
    },
    {
            quote: "Cintia captó enseguida lo que necesitábamos. Nos entregó una web moderna y fácil de usar, y siempre estuvo abierta a nuestras ideas. El resultado nos encantó y nuestros clientes lo notaron enseguida.",
            author: "Mariana",
            company: "Fundadora, EcoVida",
    },
    {
            quote: "Sentí que Cintia fue más que una desarrolladora, fue una aliada. No solo hizo un sitio web hermoso, sino que nos aconsejó sobre cómo aprovecharlo para atraer más clientes. Muy recomendable.",
            author: "Carlos Méndez",
            company: "Restaurante",
    },
    {
            quote: "La gestión de redes que hizo para nuestra marca fue un antes y un después. En poco tiempo vimos más interacción y seguidores que realmente se interesan por lo que hacemos. Se nota el trabajo y la dedicación.",
            author: "Lucía Fernández",
            company: "Directora, Artesanía flowershop",
    },
    {
            quote: "Lo que más destaco de Cintia es su profesionalismo y la atención a los detalles. Siempre estuvo disponible para responder dudas y cumplió con los plazos. Da gusto trabajar así.",
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
        url: 'https://wa.me/5492216757006',
        icon: MessageCircle,
    },
    {
        name: 'instagram',
        url: 'https://www.instagram.com/cinlo82/',
        icon: InstagramIcon,
    }
];

import { Code, Megaphone, Linkedin, Github, InstagramIcon, MessageCircle, Rocket, Users, PenTool, MonitorSmartphone } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';


export const navLinks = [
    { href: '#hero', labelKey: 'nav.home' },
    { href: '#about', labelKey: 'nav.about' },
    { href: '#skills', labelKey: 'nav.skills' },
    { href: '#work', labelKey: 'nav.work' },
    { href: '#services', labelKey: 'nav.services' },
    { href: '#testimonials', labelKey: 'nav.testimonials' },
    { href: '#contact', labelKey: 'nav.contact' },
];

export const services = [
    {
        titleKey: 'services.web.title',
        descriptionKey: 'services.web.description',
        icon: Code,
        featured: true,
        includesKeys: [
            'services.web.includes.frontend',
            'services.web.includes.backend',
            'services.web.includes.responsive',
            'services.web.includes.deploy',
        ],
    },
    {
        titleKey: 'services.ui.title',
        descriptionKey: 'services.ui.description',
        icon: PenTool,
        includesKeys: [
            'services.ui.includes.ui',
            'services.ui.includes.design',
            'services.ui.includes.performance',
            'services.ui.includes.accessibility',
        ],
    },
    {
        titleKey: 'services.maintenance.title',
        descriptionKey: 'services.maintenance.description',
        icon: Rocket,
        includesKeys: [
            'services.maintenance.includes.refactors',
            'services.maintenance.includes.bugs',
            'services.maintenance.includes.features',
            'services.maintenance.includes.performance',
        ],
    },
];

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export const portfolioProjects = [
    {
            id: '1',
            titleKey: 'projects.1.title',
            descriptionKey: 'projects.1.description',
            tags: ['HTML', 'JavaScript', 'CSS'],
            image: getImage('work-1'),
            liveUrl: 'https://roma-masajes-reiki.netlify.app/',
            
    },
    {
            id: '2',
            titleKey: 'projects.2.title',
            descriptionKey: 'projects.2.description',
            tags: ['HTML', 'CSS', 'Javascript'],
            image: getImage('work-2'),
            liveUrl: 'https://cinlodev.github.io/api-rest-js-practico/',
            githubUrl: 'https://github.com/CinloDev/api-rest-js-practico',
    },
    {
            id: '3',
            titleKey: 'projects.3.title',
            descriptionKey: 'projects.3.description',
            tags: ['JavaScript', 'Tailwind CSS', 'HTML5'],
            image: getImage('work-3'),
            liveUrl: 'https://cinlodev.github.io/travel-tailwind/',
            githubUrl: 'https://github.com/CinloDev/travel-tailwind',
    },
    {
            id: '4',
            titleKey: 'projects.4.title',
            descriptionKey: 'projects.4.description',
            tags: ['JavaScript', 'CSS', 'HTML5'],
            image: getImage('work-4'),
            liveUrl: 'https://calendario-stardew.netlify.app/',
            githubUrl: 'https://github.com/CinloDev/calendar-stardew/',
    },
    {
            id: '5',
            titleKey: 'projects.5.title',
            descriptionKey: 'projects.5.description',
            tags: ['Estrategia de Contenido', 'Branding', 'Instagram'],
            image: getImage('work-5'),
            liveUrl: 'https://www.instagram.com/tejiendo_con_ranchesca/',
    },
    {
            id: '6',
            titleKey: 'projects.6.title',
            descriptionKey: 'projects.6.description',
            tags: ['Astro', 'Tailwind CSS', 'TypeScript', 'React'],
            image: getImage('work-6'),
            liveUrl: 'https://cintialosada-portfolio.netlify.app/',
            githubUrl: 'https://github.com/CinloDev/cinlo-portfolio',
    },
];

export const testimonials = [
    {
        quoteKey: 'testimonials.0.quote',
        authorKey: 'testimonials.0.author',
        companyKey: 'testimonials.0.company',
    },
    {
        quoteKey: 'testimonials.1.quote',
        authorKey: 'testimonials.1.author',
        companyKey: 'testimonials.1.company',
    },
    {
        quoteKey: 'testimonials.2.quote',
        authorKey: 'testimonials.2.author',
        companyKey: 'testimonials.2.company',
    },
    {
        quoteKey: 'testimonials.3.quote',
        authorKey: 'testimonials.3.author',
        companyKey: 'testimonials.3.company',
    },
    {
        quoteKey: 'testimonials.4.quote',
        authorKey: 'testimonials.4.author',
        companyKey: 'testimonials.4.company',
    },
];

export const aboutMe = {
    descriptionKey: 'about.description',
    image: getImage('about-me'),
};

export const skillsSection = {
    titleKey: 'skills.title',
    introKey: 'skills.intro',
    columns: [
        {
            titleKey: 'skills.columns.frontend.title',
            items: [
                { nameKey: 'skills.columns.frontend.items.react', levelKey: 'skills.levels.proficient' },
                { nameKey: 'skills.columns.frontend.items.next', levelKey: 'skills.levels.proficient' },
                { nameKey: 'skills.columns.frontend.items.js', levelKey: 'skills.levels.proficient' },
                { nameKey: 'skills.columns.frontend.items.tailwind', levelKey: 'skills.levels.proficient' },
                { nameKey: 'skills.columns.frontend.items.htmlcss', levelKey: 'skills.levels.proficient' },
            ],
        },
        {
            titleKey: 'skills.columns.backend.title',
            items: [
                { nameKey: 'skills.columns.backend.items.node', levelKey: 'skills.levels.working' },
                { nameKey: 'skills.columns.backend.items.apis', levelKey: 'skills.levels.working' },
                { nameKey: 'skills.columns.backend.items.auth', levelKey: 'skills.levels.working' },
                { nameKey: 'skills.columns.backend.items.db', levelKey: 'skills.levels.working' },
            ],
        },
        {
            titleKey: 'skills.columns.tools.title',
            items: [
                { nameKey: 'skills.columns.tools.items.git', levelKey: 'skills.levels.proficient' },
                { nameKey: 'skills.columns.tools.items.npm', levelKey: 'skills.levels.proficient' },
                { nameKey: 'skills.columns.tools.items.vercel', levelKey: 'skills.levels.working' },
                { nameKey: 'skills.columns.tools.items.figma', levelKey: 'skills.levels.familiar' },
            ],
        },
    ],
    levelsKeys: {
        proficient: 'skills.levels.proficient',
        working: 'skills.levels.working',
        familiar: 'skills.levels.familiar',
    },
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

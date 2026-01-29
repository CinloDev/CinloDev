import { Code, Megaphone, Linkedin, Github, InstagramIcon, MessageCircle, Rocket, Users, PenTool, MonitorSmartphone, Twitter } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';


export const navLinks = [
    { href: '/#hero', labelKey: 'nav.home' },
    { href: '/#about', labelKey: 'nav.about' },
    { href: '/#skills', labelKey: 'nav.skills' },
    { href: '/#work', labelKey: 'nav.work' },
    { href: '/#services', labelKey: 'nav.services' },
    { href: '/#testimonials', labelKey: 'nav.testimonials' },
    { href: '/#contact', labelKey: 'nav.contact' },
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
            details: {
                nameKey: 'projects.1.details.name',
                summaryKey: 'projects.1.details.summary',
                // metadata
                stackKey: 'projects.1.details.stack',
                statusKey: 'projects.1.details.status',
                typeKey: 'projects.1.details.type',
                // context & client
                clientKey: 'projects.1.details.client',
                contextKey: 'projects.1.details.context',
                // objective (paragraph + items)
                objectiveKey: 'projects.1.details.objective',
                objectiveItemsKey: 'projects.1.details.objective.items',
                // process (paragraph + steps)
                processKey: 'projects.1.details.process',
                processStepsKey: 'projects.1.details.process.steps',
                // result (paragraph + items)
                resultKey: 'projects.1.details.result',
                resultItemsKey: 'projects.1.details.result.items',
                // STAR keys (kept for compatibility)
                star: {
                    situacionKey: 'projects.1.details.star.situacion',
                    tareaKey: 'projects.1.details.star.tarea',
                    accionKey: 'projects.1.details.star.accion',
                    resultadoKey: 'projects.1.details.star.resultado',
                },
                roleKey: 'projects.1.details.role',
                responsibilitiesKey: 'projects.1.details.responsibilities',
                technologiesKey: 'projects.1.details.technologies',
                feedbackKey: 'projects.1.details.feedback',
            },
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
            tags: ['HTML', 'CSS', 'JavaScript'],
            image: getImage('work-4'),
            liveUrl: 'https://calendario-stardew.netlify.app/',
            githubUrl: 'https://github.com/CinloDev/calendar-stardew/',
            details: {
                nameKey: 'projects.4.details.name',
                summaryKey: 'projects.4.details.summary',
                inspirationKey: 'projects.4.details.inspiration',
                // metadata
                stackKey: 'projects.4.details.stack',
                statusKey: 'projects.4.details.status',
                typeKey: 'projects.4.details.type',
                // context & client
                contextKey: 'projects.4.details.context',
                // objective (paragraph + items)
                objectiveKey: 'projects.4.details.objective',
                objectiveItemsKey: 'projects.4.details.objective.items',
                // process (paragraph + steps)
                processKey: 'projects.4.details.process',
                processStepsKey: 'projects.4.details.process.steps',
                // result (paragraph + items)
                resultKey: 'projects.4.details.result',
                resultItemsKey: 'projects.4.details.result.items',
                // STAR kept for compatibility (empty)
                star: {
                    situacionKey: 'projects.4.details.star.situacion',
                    tareaKey: 'projects.4.details.star.tarea',
                    accionKey: 'projects.4.details.star.accion',
                    resultadoKey: 'projects.4.details.star.resultado',
                },
                roleKey: 'projects.4.details.role',
                responsibilitiesKey: 'projects.4.details.responsibilities',
                technologiesKey: 'projects.4.details.technologies',
                feedbackKey: 'projects.4.details.feedback',
            },
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
        name: 'Twitter',
        url: 'https://x.com/CinloDev',
        icon: Twitter,
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/cinlodev/',
        icon: InstagramIcon,
    }
];

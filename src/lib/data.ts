import { Code, Megaphone, Linkedin, Github, InstagramIcon, MessageCircle, Rocket, Users, PenTool, MonitorSmartphone, Twitter } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export const navLinks = [
    { href: '/#hero', labelKey: 'nav.home' },
    { href: '/#experience', labelKey: 'nav.experience' },
    { href: '/#work', labelKey: 'nav.work' },
    { href: '/#about', labelKey: 'nav.about' },
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

export interface ImagePlaceholder {
    id: string;
    description: string;
    imageUrl: string;
    imageHint: string;
}

export interface PortfolioProjectDetails {
    nameKey?: string;
    summaryKey?: string;
    stackKey?: string;
    statusKey?: string;
    typeKey?: string;
    contextKey?: string;
    objectiveKey?: string;
    objectiveItemsKey?: string;
    processKey?: string;
    processStepsKey?: string;
    resultKey?: string;
    resultItemsKey?: string;
    roleKey?: string;
    responsibilitiesKey?: string;
    technologiesKey?: string;
    feedbackKey?: string;
}

export interface PortfolioProject {
    id: string;
    titleKey: string;
    descriptionKey: string;
    tags: string[];
    image?: ImagePlaceholder;
    liveUrl?: string;
    githubUrl?: string;
    details?: PortfolioProjectDetails;
}

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export const portfolioProjects: PortfolioProject[] = [
    {
        id: 'cinloLabs',
        titleKey: 'projects.cinloLabs.title',
        descriptionKey: 'projects.cinloLabs.description',
        tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
        image: getImage('work-5'),
        liveUrl: 'https://labs.cinlodev.com/',
        githubUrl: 'https://github.com/CinloDev/cinlolabs-showcase',
        details: {
            nameKey: 'projects.cinloLabs.details.name',
            summaryKey: 'projects.cinloLabs.details.summary',
            stackKey: 'projects.cinloLabs.details.stack',
            statusKey: 'projects.cinloLabs.details.status',
            typeKey: 'projects.cinloLabs.details.type',
            contextKey: 'projects.cinloLabs.details.context',
            objectiveKey: 'projects.cinloLabs.details.objective',
            objectiveItemsKey: 'projects.cinloLabs.details.objective.items',
            processKey: 'projects.cinloLabs.details.process',
            processStepsKey: 'projects.cinloLabs.details.process.steps',
            resultKey: 'projects.cinloLabs.details.result',
            resultItemsKey: 'projects.cinloLabs.details.result.items',
            roleKey: 'projects.cinloLabs.details.role',
            responsibilitiesKey: 'projects.cinloLabs.details.responsibilities',
            technologiesKey: 'projects.cinloLabs.details.technologies',
            feedbackKey: 'projects.cinloLabs.details.feedback',
        },
    },
    {
        id: 'alDia',
        titleKey: 'projects.alDia.title',
        descriptionKey: 'projects.alDia.description',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
        image: getImage('work-1'),
        liveUrl: 'https://aldia.cinlodev.com',
        githubUrl: 'https://github.com/CinloDev/aldia-showcase',
        details: {
            nameKey: 'projects.alDia.details.name',
            summaryKey: 'projects.alDia.details.summary',
            stackKey: 'projects.alDia.details.stack',
            statusKey: 'projects.alDia.details.status',
            typeKey: 'projects.alDia.details.type',
            contextKey: 'projects.alDia.details.context',
            objectiveKey: 'projects.alDia.details.objective',
            objectiveItemsKey: 'projects.alDia.details.objective.items',
            processKey: 'projects.alDia.details.process',
            processStepsKey: 'projects.alDia.details.process.steps',
            resultKey: 'projects.alDia.details.result',
            resultItemsKey: 'projects.alDia.details.result.items',
            roleKey: 'projects.alDia.details.role',
            responsibilitiesKey: 'projects.alDia.details.responsibilities',
            technologiesKey: 'projects.alDia.details.technologies',
            feedbackKey: 'projects.alDia.details.feedback',
        },
    },
    {
        id: 'mailQuark',
        titleKey: 'projects.mailQuark.title',
        descriptionKey: 'projects.mailQuark.description',
        tags: ['Next.js', 'TypeScript', 'SMTP', 'Vanilla CSS'],
        image: getImage('work-8'),
        liveUrl: 'https://email-test-public.vercel.app/',
        githubUrl: 'https://github.com/CinloDev/email_test_public',
        details: {
            nameKey: 'projects.mailQuark.details.name',
            summaryKey: 'projects.mailQuark.details.summary',
            stackKey: 'projects.mailQuark.details.stack',
            statusKey: 'projects.mailQuark.details.status',
            typeKey: 'projects.mailQuark.details.type',
            contextKey: 'projects.mailQuark.details.context',
            objectiveKey: 'projects.mailQuark.details.objective',
            objectiveItemsKey: 'projects.mailQuark.details.objective.items',
            processKey: 'projects.mailQuark.details.process',
            processStepsKey: 'projects.mailQuark.details.process.steps',
            resultKey: 'projects.mailQuark.details.result',
            resultItemsKey: 'projects.mailQuark.details.result.items',
            roleKey: 'projects.mailQuark.details.role',
            responsibilitiesKey: 'projects.mailQuark.details.responsibilities',
            technologiesKey: 'projects.mailQuark.details.technologies',
            feedbackKey: 'projects.mailQuark.details.feedback',
        },
    },
    {
        id: 'nekoTools',
        titleKey: 'projects.nekoTools.title',
        descriptionKey: 'projects.nekoTools.description',
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Web Workers', 'Canvas API'],
        image: getImage('work-11'),
        liveUrl: 'https://nekotools.cinlodev.com/',
        githubUrl: 'https://github.com/CinloDev/nekotools-showcase',
        details: {
            nameKey: 'projects.nekoTools.details.name',
            summaryKey: 'projects.nekoTools.details.summary',
            stackKey: 'projects.nekoTools.details.stack',
            statusKey: 'projects.nekoTools.details.status',
            typeKey: 'projects.nekoTools.details.type',
            contextKey: 'projects.nekoTools.details.context',
            objectiveKey: 'projects.nekoTools.details.objective',
            objectiveItemsKey: 'projects.nekoTools.details.objective.items',
            processKey: 'projects.nekoTools.details.process',
            processStepsKey: 'projects.nekoTools.details.process.steps',
            resultKey: 'projects.nekoTools.details.result',
            resultItemsKey: 'projects.nekoTools.details.result.items',
            roleKey: 'projects.nekoTools.details.role',
            responsibilitiesKey: 'projects.nekoTools.details.responsibilities',
            technologiesKey: 'projects.nekoTools.details.technologies',
            feedbackKey: 'projects.nekoTools.details.feedback',
        },
    },
    {
        id: 'commandCenter',
        titleKey: 'projects.commandCenter.title',
        descriptionKey: 'projects.commandCenter.description',
        tags: ['JavaScript', 'Vite', 'Tailwind', 'Persistence', 'Automation'],
        image: getImage('work-7'),
        liveUrl: 'https://vault.cinlodev.com/',
        githubUrl: 'https://github.com/CinloDev/vault-showcase',
        details: {
            nameKey: 'projects.commandCenter.details.name',
            summaryKey: 'projects.commandCenter.details.summary',
            stackKey: 'projects.commandCenter.details.stack',
            statusKey: 'projects.commandCenter.details.status',
            typeKey: 'projects.commandCenter.details.type',
            contextKey: 'projects.commandCenter.details.context',
            objectiveKey: 'projects.commandCenter.details.objective',
            objectiveItemsKey: 'projects.commandCenter.details.objective.items',
            processKey: 'projects.commandCenter.details.process',
            processStepsKey: 'projects.commandCenter.details.process.steps',
            resultKey: 'projects.commandCenter.details.result',
            resultItemsKey: 'projects.commandCenter.details.result.items',
            roleKey: 'projects.commandCenter.details.role',
            responsibilitiesKey: 'projects.commandCenter.details.responsibilities',
            technologiesKey: 'projects.commandCenter.details.technologies',
            feedbackKey: 'projects.commandCenter.details.feedback',
        },
    },
    {
        id: 'figuNet',
        titleKey: 'projects.figuNet.title',
        descriptionKey: 'projects.figuNet.description',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'PWA', 'Service Workers', 'Gamification'],
        image: getImage('work-10'),
        liveUrl: 'https://figunet.com/album',
        details: {
            nameKey: 'projects.figuNet.details.name',
            summaryKey: 'projects.figuNet.details.summary',
            stackKey: 'projects.figuNet.details.stack',
            statusKey: 'projects.figuNet.details.status',
            typeKey: 'projects.figuNet.details.type',
            contextKey: 'projects.figuNet.details.context',
            objectiveKey: 'projects.figuNet.details.objective',
            objectiveItemsKey: 'projects.figuNet.details.objective.items',
            processKey: 'projects.figuNet.details.process',
            processStepsKey: 'projects.figuNet.details.process.steps',
            resultKey: 'projects.figuNet.details.result',
            resultItemsKey: 'projects.figuNet.details.result.items',
            roleKey: 'projects.figuNet.details.role',
            responsibilitiesKey: 'projects.figuNet.details.responsibilities',
            technologiesKey: 'projects.figuNet.details.technologies',
            feedbackKey: 'projects.figuNet.details.feedback',
        },
    },
];

export const testimonials = [
    {
        quoteKey: 'testimonials.0.quote',
        authorKey: 'testimonials.0.author',
        companyKey: 'testimonials.0.company',
        avatar: './images/testimonial-aye.jpg',
    },
    {
        quoteKey: 'testimonials.1.quote',
        authorKey: 'testimonials.1.author',
        companyKey: 'testimonials.1.company',
        avatar: 'https://plus.unsplash.com/premium_photo-1681493353999-a3eea8b95e1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        quoteKey: 'testimonials.2.quote',
        authorKey: 'testimonials.2.author',
        companyKey: 'testimonials.2.company',
        avatar: 'https://plus.unsplash.com/premium_photo-1702598904442-de1d96570fa8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        quoteKey: 'testimonials.3.quote',
        authorKey: 'testimonials.3.author',
        companyKey: 'testimonials.3.company',
        avatar: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        quoteKey: 'testimonials.4.quote',
        authorKey: 'testimonials.4.author',
        companyKey: 'testimonials.4.company',
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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

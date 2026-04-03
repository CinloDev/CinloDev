'use client';

import { useLocale } from '@/components/language-provider';
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type Experience = {
    roleKey: string;
    company?: string;
    periodKey: string;
    descriptionKey: string;
    stack?: string[];
    tasksKeys: string[];
};

const experiences: Experience[] = [
    {
        roleKey: 'experience.1.role',
        company: 'Campus Mariana Casella',
        periodKey: 'experience.1.period',
        descriptionKey: 'experience.1.description',
        stack: ['Vue', 'Tailwind', 'PHP', 'Laravel', 'PostgreSQL', 'Neon'],
        tasksKeys: [
            'experience.1.tasks.0',
            'experience.1.tasks.1',
            'experience.1.tasks.2',
            'experience.1.tasks.3',
            'experience.1.tasks.4',
            'experience.1.tasks.5',
            'experience.1.tasks.6',
            'experience.1.tasks.7',
            'experience.1.tasks.9',
        ],
    },
    {
        roleKey: 'experience.2.role',
        periodKey: 'experience.2.period',
        descriptionKey: 'experience.2.description',
        stack: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js'],
        tasksKeys: [
            'experience.2.tasks.0',
            'experience.2.tasks.1',
            'experience.2.tasks.2',
            'experience.2.tasks.3',
            'experience.2.tasks.4',
            'experience.2.tasks.5',
        ],
    },
    {
        roleKey: 'experience.3.role',
        periodKey: 'experience.3.period',
        descriptionKey: 'experience.3.description',
        stack: ['Next.js', 'React', 'HTML', 'CSS', 'JavaScript'],
        tasksKeys: [
            'experience.3.tasks.0',
            'experience.3.tasks.1',
            'experience.3.tasks.2',
            'experience.3.tasks.3',
            'experience.3.tasks.4',
            'experience.3.tasks.5',
        ],
    },
];

export default function ExperienceSection() {
    const { t } = useLocale();

    return (
        <section id="experience" aria-labelledby="experience-title" className="w-full py-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2
                    id="experience-title"
                    className="text-3xl font-bold font-headline tracking-tight text-center mb-12"
                >
                    {t('experience.heading')}
                </h2>

                <div className="grid gap-6 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3">
                    {experiences.map((exp, index) => (
                        <Card
                            key={index}
                            className="h-full rounded-2xl shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-gray-850 dark:via-gray-800 dark:to-gray-750"
                        >
                            <CardContent className="p-6 flex flex-col h-full gap-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-start gap-2 text-primary">
                                        <Briefcase className="w-4 h-4 shrink-0 mt-1" />
                                        <h3 className="text-lg font-semibold leading-snug text-foreground">
                                            {t(exp.roleKey)}
                                        </h3>
                                    </div>

                                    {exp.company && (
                                        <span className="text-sm font-medium text-primary">
                                            {exp.company}
                                        </span>
                                    )}

                                    <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-secondary">
                                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                                        <span>{t(exp.periodKey)}</span>
                                    </div>
                                </div>

                                <p className="text-sm text-muted-foreground dark:text-secondary">
                                    {t(exp.descriptionKey)}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-2">
                                    {exp.stack?.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <ul className="space-y-1.5 list-disc list-outside marker:text-primary pl-5">
                                    {exp.tasksKeys.map((key) => (
                                        <li key={key} className="text-sm text-foreground/85 pl-1">
                                            {t(key)}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

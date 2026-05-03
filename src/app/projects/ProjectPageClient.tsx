"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useLocale } from "@/components/language-provider"
import { portfolioProjects as projects } from "@/lib/data"

type Props = { id: string }

export default function ProjectPageClient({ id }: Props) {
  const { t } = useLocale()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="container mx-auto py-12">
        <p>{t('projects.notFound') || 'Project not found'}</p>
        <Link href="/" className="text-blue-600 underline">{t('projects.backToWork') || 'Back'}</Link>
      </div>
    )
  }

  const details = project.details || null

  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <header className="prose dark:prose-invert">
        <h1 className="text-3xl font-bold text-foreground">{t(project.titleKey)}</h1>
        {details?.summaryKey ? <p className="mt-2 text-muted-foreground dark:text-white">{t(details.summaryKey)}</p> : null}
      </header>

      <section className="mt-6 grid gap-8 lg:grid-cols-3 lg:items-start">
        <div className="lg:col-span-1 lg:sticky lg:top-24 space-y-6">
          {project.image ? (
            <div className="w-full rounded-lg overflow-hidden aspect-video max-h-[50vh] relative shadow-lg">
              <Image 
                src={project.image.imageUrl} 
                alt={project.image.description} 
                fill 
                sizes="(min-width:1024px) 33vw, 100vw" 
                className="object-cover" 
                priority
              />
            </div>
          ) : null}

          {/* Metadata & Role in First Column */}
          <div className="bg-card/30 dark:bg-card/10 p-5 rounded-xl border border-border/50 space-y-4">
            <div className="space-y-2 text-sm">
              <p><strong>{t('projects.labels.type')}:</strong> {details?.typeKey ? t(details.typeKey) : 'Sitio web institucional'}</p>
              <p><strong>{t('projects.labels.status')}:</strong> {details?.statusKey ? t(details.statusKey) : 'Desplegado y en uso'}</p>
              <p><strong>{t('projects.labels.stack')}:</strong> {details?.stackKey ? t(details.stackKey) : 'HTML · CSS · JavaScript'}</p>
            </div>
            
            {details?.roleKey ? (
              <div className="pt-4 border-t border-border/50">
                <h3 className="font-semibold text-primary">{t('projects.labels.myRole')}</h3>
                <p className="mt-1 text-sm">{t(details.roleKey)}</p>
              </div>
            ) : null}

            {details?.technologiesKey ? (
              <div className="pt-4 border-t border-border/50">
                <h3 className="font-semibold text-primary text-sm mb-2">{t('projects.labels.technologiesUsed')}</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(t(details.technologiesKey)) ? (
                    (t(details.technologiesKey) as unknown as string[]).map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider rounded-md bg-primary/10 text-primary border border-primary/20 font-bold">{tech}</span>
                    ))
                  ) : (
                    <p className="text-xs">{t(details.technologiesKey)}</p>
                  )}
                </div>
              </div>
            ) : null}

            <div className="pt-4 flex flex-col gap-3">
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-full text-center px-4 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-md">
                  {t('projects.viewLive') || 'Ver en vivo'}
                </a>
              ) : null}
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-secondary/20 hover:bg-secondary/30 text-foreground rounded-lg transition-colors border border-border">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.88 5.35.88 11.62c0 4.77 3.09 8.82 7.38 10.25.54.10.74-.24.74-.52 0-.26-.01-1-.02-1.96-3 .65-3.64-1.45-3.64-1.45-.49-1.25-1.2-1.58-1.2-1.58-.98-.67.07-.66.07-.66 1.08.08 1.64 1.11 1.64 1.11.96 1.65 2.51 1.17 3.12.9.1-.7.38-1.17.69-1.44-2.4-.27-4.92-1.2-4.92-5.32 0-1.18.42-2.15 1.11-2.91-.11-.28-.48-1.4.11-2.92 0 0 .9-.29 2.95 1.11A10.1 10.1 0 0 1 12 6.8c.91.004 1.83.12 2.69.35 2.04-1.4 2.94-1.11 2.94-1.11.6 1.52.23 2.64.11 2.92.69.76 1.11 1.73 1.11 2.91 0 4.13-2.53 5.05-4.94 5.31.39.34.74 1.02.74 2.06 0 1.48-.01 2.67-.01 3.03 0 .29.19.62.75.52 4.29-1.43 7.38-5.48 7.38-10.25C23.12 5.35 18.27.5 12 .5z"/></svg>
                  <span>{t('projects.code') || 'Código'}</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* Content Columns */}
        <div className="lg:col-span-1 space-y-8">
          {details?.objectiveKey ? (
            <div className="bg-card/20 p-6 rounded-xl border border-border/40">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                {t('projects.labels.objectiveHeading')}
              </h3>
              <p className="text-muted-foreground dark:text-white/80 leading-relaxed">{t(details.objectiveKey)}</p>
              {details.objectiveItemsKey ? (
                <ul className="grid gap-2 mt-4">
                  {(t(details.objectiveItemsKey) as unknown as string[] || []).map((it, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground dark:text-white/70">
                      <span className="text-primary mt-1">•</span> {it}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}

          {details?.resultKey ? (
            <div className="bg-card/20 p-6 rounded-xl border border-border/40">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                {t('projects.labels.resultHeading')}
              </h3>
              <p className="text-muted-foreground dark:text-white/80 leading-relaxed">{t(details.resultKey)}</p>
              {details.resultItemsKey ? (
                <ul className="grid gap-2 mt-4">
                  {(t(details.resultItemsKey) as unknown as string[] || []).map((r, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground dark:text-white/70">
                      <span className="text-green-500 mt-1">✓</span> {r}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="lg:col-span-1 space-y-8">
          {details?.processKey ? (
            <div className="bg-card/20 p-6 rounded-xl border border-border/40">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                {t('projects.labels.processHeading')}
              </h3>
              <p className="text-muted-foreground dark:text-white/80 leading-relaxed">{t(details.processKey)}</p>
              {details.processStepsKey ? (
                <ul className="grid gap-3 mt-4">
                  {(t(details.processStepsKey) as unknown as string[] || []).map((s, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/50 flex items-center justify-center text-[10px] font-bold">{i + 1}</span>
                      <span className="text-muted-foreground dark:text-white/70 pt-1">{s}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}

          {details?.responsibilitiesKey ? (
            <div className="bg-card/20 p-6 rounded-xl border border-border/40">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                {t('projects.labels.responsibilities')}
              </h3>
              {Array.isArray((t(details.responsibilitiesKey))) ? (
                <ul className="grid gap-2">
                  {(t(details.responsibilitiesKey) as unknown as string[] || []).map((r, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground dark:text-white/70">
                      <span className="text-primary mt-1">→</span> {r}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground dark:text-white/70">{t(details.responsibilitiesKey)}</p>
              )}
            </div>
          ) : null}

          {details?.feedbackKey ? (
            <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 italic text-sm text-foreground/80 relative">
              <span className="absolute -top-3 -left-2 text-4xl text-primary/20 font-serif">"</span>
              {t(details.feedbackKey)}
            </div>
          ) : null}
        </div>
      </section>

      <div className="mt-12 flex flex-col items-center">
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-card border hover:bg-secondary/10 text-foreground rounded-full transition-all shadow-sm">
          <span>{t('projects.backToWork') || 'Volver a proyectos'}</span>
        </Link>
      </div>

      {/* Todas las tarjetas de proyectos */}
      <section className="mt-8">
        <h2 className="sr-only">{t('projects.heading')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
          {projects.map((p) => (
            <div key={p.id} className="w-full rounded-lg h-full">
              <Link href={`/projects/${p.id}`} className="w-full rounded-lg overflow-hidden border bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:bg-card dark:bg-none shadow-[0_8px_20px_rgba(80,150,217,0.16)] hover:shadow-[0_16px_34px_rgba(80,150,217,0.24)] hover:scale-[1.015] transition-all duration-200 h-full flex flex-col">
                <div className="relative h-32 w-full bg-muted/10 flex-shrink-0">
                  {p.image ? (
                    <Image src={p.image.imageUrl} alt={p.image.description || t(p.titleKey)} fill sizes="(min-width: 1024px) 16.6vw, (min-width: 768px) 25vw, 50vw" className="object-cover" />
                  ) : null}
                </div>
                <div className="p-3 text-center flex-1 flex items-center justify-center">
                  <h3 className="text-sm font-semibold text-foreground dark:text-white">{t(p.titleKey)}</h3>
                </div>
              </Link>
              {/* repo link shown in project detail only */}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

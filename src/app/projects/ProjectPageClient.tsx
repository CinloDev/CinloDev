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
        {project.image ? (
            <div className="lg:col-span-1">
            <div className="w-full rounded-lg overflow-hidden aspect-video max-h-[50vh] relative mx-auto">
              <Image src={project.image.imageUrl} alt={project.image.description} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
            </div>
          </div>
        ) : null}

        <div className={`space-y-6 ${project.image ? 'lg:col-span-1' : 'lg:col-span-2'}`}>
          <div className="mt-0 space-y-2">
            <p><strong>{t('projects.labels.type')}:</strong> {details?.typeKey ? t(details.typeKey) : 'Sitio web institucional'}</p>
            <p><strong>{t('projects.labels.status')}:</strong> {details?.statusKey ? t(details.statusKey) : 'Desplegado y en uso'}</p>
            <p><strong>{t('projects.labels.stack')}:</strong> {details?.stackKey ? t(details.stackKey) : 'HTML · CSS · JavaScript'}</p>
          </div>
          {details?.clientKey ? (
            <div>
              <h3 className="font-semibold">{t('projects.labels.contextHeading')}</h3>
              <p className="mt-1">{t(details.clientKey)}</p>
              {details.contextKey ? <p className="mt-2">{t(details.contextKey)}</p> : null}
            </div>
          ) : null}

          {details?.objectiveKey ? (
            <div>
              <h3 className="font-semibold">{t('projects.labels.objectiveHeading')}</h3>
              <p className="mt-1">{t(details.objectiveKey)}</p>
              {details.objectiveItemsKey ? (
                <ul className="list-disc ml-5 mt-2">
                  {(t(details.objectiveItemsKey) as unknown as string[] || []).map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}

          {details?.processKey ? (
            <div>
              <h3 className="font-semibold">{t('projects.labels.processHeading')}</h3>
              <p className="mt-1">{t(details.processKey)}</p>
              {details.processStepsKey ? (
                <ul className="list-disc ml-5 mt-2">
                  {(t(details.processStepsKey) as unknown as string[] || []).map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}

          {details?.resultKey ? (
            <div>
              <h3 className="font-semibold">{t('projects.labels.resultHeading')}</h3>
              <p className="mt-1">{t(details.resultKey)}</p>
              {details.resultItemsKey ? (
                <ul className="list-disc ml-5 mt-2">
                  {(t(details.resultItemsKey) as unknown as string[] || []).map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}
        </div>

        <aside className="space-y-6">
            {details?.roleKey ? (
            <div>
              <h3 className="font-semibold">{t('projects.labels.myRole')}</h3>
              <p className="mt-1">{t(details.roleKey)}</p>
            </div>
          ) : null}

          {details?.responsibilitiesKey ? (
            <div>
              <h3 className="font-semibold">{t('projects.labels.responsibilities')}</h3>
              {Array.isArray((t(details.responsibilitiesKey) as unknown as any[])) ? (
                <ul className="list-disc ml-5 mt-2">
                  {(t(details.responsibilitiesKey) as unknown as string[] || []).map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-1">{t(details.responsibilitiesKey)}</p>
              )}
            </div>
          ) : null}

          {details?.technologiesKey ? (
            <div>
              <h3 className="font-semibold">{t('projects.labels.technologiesUsed')}</h3>
              {Array.isArray((t(details.technologiesKey) as unknown as any[])) ? (
                <div className="flex flex-wrap gap-2 mt-2">
                    {(t(details.technologiesKey) as unknown as string[] || []).map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs rounded text-pink-600 dark:text-fuchsia-400 font-medium">{tech}</span>
                  ))}
                </div>
              ) : (
                <p className="mt-1">{t(details.technologiesKey)}</p>
              )}
            </div>
          ) : null}

          {details?.feedbackKey ? (
            <div>
              <h3 className="font-semibold">{t('projects.labels.feedback')}</h3>
              <p className="mt-1">{t(details.feedbackKey)}</p>
            </div>
          ) : null}

          <div className="mt-4 flex items-center justify-center gap-3">
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary/50">{t('projects.viewLive') || 'Ver proyecto en vivo'}</a>
            ) : null}
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-primary/90 text-secondary-foreground rounded-md transition-colors dark:bg-secondary/60 dark:hover:bg-primary/80">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.88 5.35.88 11.62c0 4.77 3.09 8.82 7.38 10.25.54.10.74-.24.74-.52 0-.26-.01-1-.02-1.96-3 .65-3.64-1.45-3.64-1.45-.49-1.25-1.2-1.58-1.2-1.58-.98-.67.07-.66.07-.66 1.08.08 1.64 1.11 1.64 1.11.96 1.65 2.51 1.17 3.12.9.1-.7.38-1.17.69-1.44-2.4-.27-4.92-1.2-4.92-5.32 0-1.18.42-2.15 1.11-2.91-.11-.28-.48-1.4.11-2.92 0 0 .9-.29 2.95 1.11A10.1 10.1 0 0 1 12 6.8c.91.004 1.83.12 2.69.35 2.04-1.4 2.94-1.11 2.94-1.11.6 1.52.23 2.64.11 2.92.69.76 1.11 1.73 1.11 2.91 0 4.13-2.53 5.05-4.94 5.31.39.34.74 1.02.74 2.06 0 1.48-.01 2.67-.01 3.03 0 .29.19.62.75.52 4.29-1.43 7.38-5.48 7.38-10.25C23.12 5.35 18.27.5 12 .5z"/></svg>
                <span>{t('projects.code') || 'Repo'}</span>
              </a>
            ) : null}
          </div>
        </aside>
      </section>

      <div className="mt-8 flex flex-col items-center space-y-3">
        <Link href="/" className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary/50">{t('privacy.back') || 'Back to home'}</Link>
      </div>

      {/* Todas las tarjetas de proyectos */}
      <section className="mt-8">
        <h2 className="sr-only">{t('projects.heading')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
          {projects.map((p) => (
            <div key={p.id} className="w-full rounded-lg overflow-hidden h-full">
              <Link key={p.id} href={`/projects/${p.id}`} className="block w-full rounded-lg overflow-hidden border bg-card hover:shadow-lg transition h-full flex flex-col">
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

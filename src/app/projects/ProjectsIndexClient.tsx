"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from '@/components/language-provider'
import { portfolioProjects as projects } from '@/lib/data'

export default function ProjectsIndexClient() {
  const { t } = useLocale()

  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <header className="prose dark:prose-invert">
        <h1 className="text-3xl font-bold">{t('projects.heading')}</h1>
        <p className="mt-2 text-muted-foreground">{t('projects.intro')}</p>
      </header>

      <section className="mt-8 projects-cards-list">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
          {projects.map((p) => (
            <div key={p.id} className="w-full rounded-lg overflow-hidden h-full card-project">
              <Link href={`/projects/${p.id}`} className="block w-full rounded-lg overflow-hidden border bg-card dark:bg-card/80 hover:shadow-lg transition h-full flex flex-col">
                <div className="relative h-40 w-full bg-muted/10 flex-shrink-0">
                  {p.image ? (
                    <Image src={p.image.imageUrl} alt={p.image.description || t(p.titleKey)} fill sizes="(min-width: 1024px) 16.6vw, (min-width: 768px) 25vw, 50vw" className="object-cover" />
                  ) : null}
                </div>
                <div className="p-3 flex-1 flex items-center justify-center">
                  <h3 className="text-sm font-semibold text-foreground dark:text-white text-center">{t(p.titleKey)}</h3>
                </div>
              </Link>
              {/* repo link shown on project detail page */}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

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
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 justify-items-center">
          {projects.map((p) => (
            <div key={p.id} className="w-full rounded-lg h-full card-project">
              <Link href={`/projects/${p.id}`} className="w-full rounded-lg overflow-hidden border bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:bg-card dark:bg-none shadow-[0_8px_20px_rgba(80,150,217,0.16)] hover:shadow-[0_16px_34px_rgba(80,150,217,0.24)] hover:scale-[1.015] transition-all duration-200 h-full flex flex-row md:flex-col items-center md:items-stretch">
                <div className="relative h-20 w-28 sm:h-24 sm:w-36 md:h-40 md:w-full bg-muted/10 flex-shrink-0">
                  {p.image ? (
                    <Image src={p.image.imageUrl} alt={p.image.description || t(p.titleKey)} fill sizes="(min-width: 1024px) 16.6vw, (min-width: 768px) 25vw, 50vw" className="object-cover" />
                  ) : null}
                </div>
                <div className="p-3.5 md:p-3 flex-1 flex items-center justify-start md:justify-center">
                  <h3 className="text-sm font-semibold text-foreground dark:text-white text-left md:text-center line-clamp-2">{t(p.titleKey)}</h3>
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

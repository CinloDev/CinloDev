"use client"

import Image from "next/image"
import React from "react"
import { useLocale } from "@/components/language-provider"
import { portfolioProjects as projects } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Props = {}

const WorkShowcase: React.FC<Props> = () => {
    const { t } = useLocale()

    return (
        <section id="work" className="w-full py-12 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t('projects.heading')}</h2>
                    <p className="mt-4 text-lg text-muted-foreground dark:text-white">{t('projects.intro')}</p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {projects.map((project) => (
                    <article key={project.id} className="group relative">
                        <div className="rounded-lg overflow-hidden">
                          <Link href={`/projects/${project.id}`} className="block rounded-lg border overflow-hidden bg-muted/20 hover:scale-101 transition-transform duration-200 cursor-pointer">
                              <div className="relative h-40 sm:h-52 w-full">
                                {project.image ? (
                                    <Image src={project.image.imageUrl} alt={project.image.description} fill className="object-cover" />
                                ) : (
                                    <div className="h-52 w-full bg-muted" />
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-foreground dark:text-white">{t(project.titleKey)}</h3>
                                <p className="text-sm text-muted-foreground dark:text-white mt-1">{t(project.descriptionKey)}</p>
                            </div>
                            <div className="p-3 border-t text-sm text-pink-600">
                                {t('projects.viewMore') || 'Ver más'}
                            </div>
                          </Link>
                                                    {/* github link intentionally shown on project detail page */}
                        </div>
                    </article>
                ))}
                </div>
            </div>
        </section>
    )
}

export default WorkShowcase

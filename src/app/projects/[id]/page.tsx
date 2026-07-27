import React from "react"
import ProjectPageClient from "../ProjectPageClient"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params as { id: string }
  return {
    alternates: { canonical: `https://portfolio.cinlodev.com/projects/${id}` },
    openGraph: { url: `https://portfolio.cinlodev.com/projects/${id}` },
  }
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params as { id: string }
  return <ProjectPageClient id={resolvedParams.id} />
}

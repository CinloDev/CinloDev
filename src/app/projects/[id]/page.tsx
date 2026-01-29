import React from "react"
import ProjectPageClient from "../ProjectPageClient"

type Props = {
  params: { id: string }
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params as { id: string }
  return <ProjectPageClient id={resolvedParams.id} />
}

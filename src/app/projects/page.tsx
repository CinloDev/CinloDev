export const metadata = {
  alternates: { canonical: 'https://cinlodev.com/projects' },
  openGraph: { url: 'https://cinlodev.com/projects' },
};

import ProjectsIndexClient from './ProjectsIndexClient'

export default function ProjectsPage() {
  return <ProjectsIndexClient />
}

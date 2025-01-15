import "./projects.css"

export const projects = () => {
  const projectsSection = document.createElement('section')
  projectsSection.className = 'projects projects-section'
  projectsSection.id = 'projects'

  document.body.appendChild(projectsSection)

  // PROJECTS
  const projectsTitle = document.createElement('h2')
  projectsTitle.className = 'projects projects-title'
  projectsTitle.textContent = 'Proyectos'

  const projectsSubTitle = document.createElement('p')
  projectsSubTitle.className = 'projects projects-sub-title'
  projectsSubTitle.textContent = "Estos son algunos de los proyectos que he ido haciendo en el máster que estoy cursando de Desarrollador FullStack, y gracias a los cuales he obtenido el primer certificado otorgado por el máster: JavaScript Developer."

  const projectsContainer = document.createElement('div')
  projectsContainer.className = 'projects projects-container'

  // GENERATE HTML
  projectsSection.appendChild(projectsTitle)
  projectsSection.appendChild(projectsSubTitle)
  projectsSection.appendChild(projectsContainer)
}
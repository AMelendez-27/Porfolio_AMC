import "./project.css"


// ADD A NEW PROJECT FUNCTION
export const addProject = (projectName, projectDescContent) => {
    document.addEventListener('DOMContentLoaded', () => {
      const projectsContainer = document.getElementsByClassName('projects-container')[0];

      const projectCard = document.createElement('div')
      projectCard.className = 'projects project-card'
      
      const profileImg = document.createElement('img')
      profileImg.className = 'projects project-card-img'
      profileImg.id = projectName
      profileImg.src = `/src/${projectName}.png`;
      profileImg.alt = `Imagen del proyecto ${projectName}`

      const projectTitle = document.createElement('h3')
      projectTitle.className = 'projects project-card-title'
      projectTitle.textContent = projectName

      const projectDesc = document.createElement('p')
      projectDesc.className = 'projects project-card-description'
      projectDesc.textContent = projectDescContent

      const projectButton = document.createElement('button')
      projectButton.className = 'projects project-card-button'
      projectButton.textContent = 'Ver Proyecto'

      projectsContainer.appendChild(projectCard)
      projectCard.appendChild(profileImg)
      projectCard.appendChild(projectTitle)
      projectCard.appendChild(projectDesc)
      projectCard.appendChild(projectButton)
    })
  }
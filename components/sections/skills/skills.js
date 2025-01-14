import "./skills.css"

export const skills = () => {
  const skillsSection = document.createElement('section')
  skillsSection.className = 'skills skills-section'
  skillsSection.id = 'skills'

  // GENERATE HTML
  document.body.appendChild(skillsSection)
  
  // SKILLS
  const skillsTitle = document.createElement('h2')
  skillsTitle.className = 'skills skills-title'
  skillsTitle.textContent = 'Mis skills'
  
  const divImgsContainer = document.createElement('div')
  divImgsContainer.className = 'skills skills-imgs-container'
  
  // GENERATE HTML
  skillsSection.appendChild(skillsTitle)
  skillsSection.appendChild(divImgsContainer)
}
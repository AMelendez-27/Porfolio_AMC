import "./link.css"


// ADD A NEW PROJECT FUNCTION
export const addLink = (linkNme) => {
    document.addEventListener('DOMContentLoaded', () => {
      const projectsContainer = document.getElementsByClassName('footer-links-container')[0];

      const linkButton = document.createElement('button')
      linkButton.className = `footer link-button`

      const linkIcon = document.createElement('img')
      linkIcon.className = `footer link-icon`
      linkIcon.id = linkNme
      linkIcon.src = `/src/${linkNme}.png`;
      linkIcon.alt = `Imagen del logotipo de ${linkNme}`

      projectsContainer.appendChild(linkButton)
      linkButton.appendChild(linkIcon)
    })
  }
  
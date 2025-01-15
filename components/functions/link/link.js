import "./link.css"


// ADD A NEW PROJECT FUNCTION
export const addLink = (linkNme, link) => {
    document.addEventListener('DOMContentLoaded', () => {
      const projectsContainer = document.getElementsByClassName('footer-links-container')[0];

      const linkButton = document.createElement('a')
      linkButton.className = `footer link-button`
      linkButton.href = link

      const linkIcon = document.createElement('img')
      linkIcon.className = `footer link-icon`
      linkIcon.id = linkNme
      linkIcon.src = `/src/${linkNme}.png`;
      linkIcon.alt = `Imagen del logotipo de ${linkNme}`

      projectsContainer.appendChild(linkButton)
      linkButton.appendChild(linkIcon)
    })
  }
  
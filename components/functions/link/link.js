import "./link.css"


// ADD A NEW PROJECT FUNCTION
export const addLink = (linkNme) => {
    document.addEventListener('DOMContentLoaded', () => {
      const projectsContainer = document.getElementsByClassName('footer-links-container')[0];

      const linkButton = document.createElement('a')
      linkButton.className = `footer link-button`
      
      function link (linkNme) {
        const linkedin = "linkedin2";
        const github = "github2";
        if (linkNme === linkedin) {
          linkButton.href = 'https://www.linkedin.com/in/%C3%A0lex-mel%C3%A9ndez-centeno-a76353337/'
        }

        if ( linkNme === github) {
          linkButton.href = 'https://github.com/AMelendez-27'
        }
      }

      const linkIcon = document.createElement('img')
      linkIcon.className = `footer link-icon`
      linkIcon.id = linkNme
      linkIcon.src = `/src/${linkNme}.png`;
      linkIcon.alt = `Imagen del logotipo de ${linkNme}`

      projectsContainer.appendChild(linkButton)
      linkButton.appendChild(linkIcon)
    })
  }
  
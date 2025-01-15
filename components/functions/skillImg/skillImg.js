import "./skillImg.css";


// ADD A NEW SKILL FUNCTION
export const skillImg = (skill) => {
  document.addEventListener('DOMContentLoaded', () => {
    const divImgsContainer = document.getElementsByClassName('skills-imgs-container')[0];

    const skillDiv = document.createElement('div')
    skillDiv.className = 'skills skill-container'

    const profileImg = document.createElement('img')
    profileImg.className = 'skills skill-img'
    profileImg.id = skill
    profileImg.src = `/src/${skill}.png`;
    profileImg.alt = `Imagen del logotipo de ${skill}`

    const skillDesc = document.createElement('p')
    skillDesc.className = 'skills skill-desc'
    skillDesc.textContent = skill

    divImgsContainer.appendChild(skillDiv)
    skillDiv.appendChild(skillDesc)
    skillDiv.appendChild(profileImg)
  })
}



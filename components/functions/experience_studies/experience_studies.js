import "./experience_studies.css";


// ADD NEW EXPERIENCE FUNCTION
export const addExperience = (title, subtitle, experienceDescription) => {
  document.addEventListener('DOMContentLoaded', () => {
    const expStuSection = document.getElementsByClassName('e-s-container')[0];

    const experienceDiv = document.createElement('div')
    experienceDiv.className = 'e-s e-s-content experience experience-container'
    experienceDiv.id = 'experience-content'

    const experienceTitle = document.createElement('h3')
    experienceTitle.className = 'e-s e-s-content experience experience-title'
    experienceTitle.innerHTML = title

    const experienceSubTitle = document.createElement('h3')
    experienceSubTitle.className = 'e-s e-s-content experience experience-sub-title'
    experienceSubTitle.innerHTML = subtitle

    const experienceDesc = document.createElement('p')
    experienceDesc.className = 'e-s e-s-content experience experience-description'
    experienceDesc.innerHTML = experienceDescription

    expStuSection.appendChild(experienceDiv)
    experienceDiv.appendChild(experienceTitle)
    experienceDiv.appendChild(experienceSubTitle)
    experienceDiv.appendChild(experienceDesc)
  })
}

// ADD NEW STUDIES FUNCTION
export const addStudies = (title, studiesDescription) => {
  document.addEventListener('DOMContentLoaded', () => {
    const expStuSection = document.getElementsByClassName('e-s-container')[0];

    const studiesDiv = document.createElement('div')
    studiesDiv.className = 'e-s e-s-content studies studies-container'
    studiesDiv.id = 'studies-content'

    const experienceTitle = document.createElement('h3')
    experienceTitle.className = 'e-s e-s-content studies studies-title'
    experienceTitle.innerHTML = title

    const experienceDesc = document.createElement('p')
    experienceDesc.className = 'e-s e-s-content studies studies-description'
    experienceDesc.innerHTML = studiesDescription

    expStuSection.appendChild(studiesDiv)
    studiesDiv.appendChild(experienceTitle)
    studiesDiv.appendChild(experienceDesc)
  })
}

import "./experience_studies.css";


// ADD NEW EXPERIENCE FUNCTION
export const addExperience = (experience, experienceDescription) => {
  document.addEventListener('DOMContentLoaded', () => {
    const expStuSection = document.getElementsByClassName('e-s-container')[0];

    const experienceDiv = document.createElement('div')
    experienceDiv.className = 'e-s e-s-content experience experience-container'
    experienceDiv.id = 'experience-content'

    const experienceTitle = document.createElement('h3')
    experienceTitle.className = 'e-s e-s-content experience experience-title'
    experienceTitle.textContent = experience

    const experienceDesc = document.createElement('p')
    experienceDesc.className = 'e-s e-s-content experience experience-description'
    experienceDesc.textContent = experienceDescription

    expStuSection.appendChild(experienceDiv)
    experienceDiv.appendChild(experienceTitle)
    experienceDiv.appendChild(experienceDesc)
  })
}

// ADD NEW STUDIES FUNCTION
export const addStudies = (studies, studiesDescription) => {
  document.addEventListener('DOMContentLoaded', () => {
    const expStuSection = document.getElementsByClassName('e-s-container')[0];

    const studiesDiv = document.createElement('div')
    studiesDiv.className = 'e-s e-s-content studies studies-container'
    studiesDiv.id = 'studies-content'

    const experienceTitle = document.createElement('h3')
    experienceTitle.className = 'e-s e-s-content studies studies-title'
    experienceTitle.textContent = studies

    const experienceDesc = document.createElement('p')
    experienceDesc.className = 'e-s e-s-content studies studies-description'
    experienceDesc.textContent = studiesDescription

    expStuSection.appendChild(studiesDiv)
    studiesDiv.appendChild(experienceTitle)
    studiesDiv.appendChild(experienceDesc)
  })
}

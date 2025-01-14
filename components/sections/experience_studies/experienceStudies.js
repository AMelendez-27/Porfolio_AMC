import "./experienceStudies.css"

export const experienceStudies = () => {
  const expStuSection = document.createElement('section');
  expStuSection.className = 'e-s e-s-section';
  expStuSection.id = 'e&s'

  document.body.appendChild(expStuSection);

  // E & S - CATEGORIES
  const expStuDiv = document.createElement('div');
  expStuDiv.className = 'e-s e-s-container';

  const categoryContainer = document.createElement('div');
  categoryContainer.className = 'e-s category-container';

  const experienceTitle = document.createElement('h2');
  experienceTitle.className = 'e-s experience-h2';

  const experienceButton = document.createElement('button');
  experienceButton.className = 'e-s e-s-button';
  experienceButton.textContent = 'Experiencia';

  const studiesTitle = document.createElement('h2');
  studiesTitle.className = 'e-s studies-h2';

  const studiesButton = document.createElement('button');
  studiesButton.className = 'e-s e-s-button';
  studiesButton.textContent = 'Estudios';

  // GENERATE HTML
  expStuSection.appendChild(expStuDiv);
  expStuDiv.appendChild(categoryContainer);
  categoryContainer.appendChild(experienceTitle);
  experienceTitle.appendChild(experienceButton);
  categoryContainer.appendChild(studiesTitle);
  studiesTitle.appendChild(studiesButton);


  experienceButton.addEventListener('click', () => {
    // SHOW EXPERIENCE, HIDE ALL STUDIES
    const experienceElements = document.querySelectorAll('.experience-container');
    experienceElements.forEach(element => {
      element.style.display = 'flex';
    });
    
    const studiesElements = document.querySelectorAll('.studies-container');
    studiesElements.forEach(element => {
      element.style.display = 'none';
    });

    experienceButton.classList.add('active');
    experienceButton.classList.remove('color');
    studiesButton.classList.remove('active');
    studiesButton.classList.add('color');
  });

  studiesButton.addEventListener('click', () => {
    // SHOW STUDIES, HIDE ALL EXPERIENCE
    const studiesElements = document.querySelectorAll('.studies-container');
    studiesElements.forEach(element => {
      element.style.display = 'flex';
    });
    
    const experienceElements = document.querySelectorAll('.experience-container');
    experienceElements.forEach(element => {
      element.style.display = 'none';
    });

    studiesButton.classList.add('active');
    studiesButton.classList.remove('color');
    experienceButton.classList.remove('active');
    experienceButton.classList.add('color');
  });

  // ----------------------------------------------------------------------------------
  // DEFAULT: SHOW EXPERIENCE CONTENT
  document.addEventListener('DOMContentLoaded', () => {
    // SHOW ALL EXPERIENCE ELEMENTS BY DEFAULT
    const experienceElements = document.querySelectorAll('.experience-container');
    experienceElements.forEach(element => {
      element.style.display = 'flex';
    });
    
    // HIDE ALL STUDIES ELEMENTS BY DEFAULT
    const studiesElements = document.querySelectorAll('.studies-container');
    studiesElements.forEach(element => {
      element.style.display = 'none';
    });

    // SET "EXPERIENCIA" BUTTON AS ACTIVE BY DEFAULT
    experienceButton.classList.add('active');
    experienceButton.classList.remove('color');
    studiesButton.classList.remove('active');
    studiesButton.classList.add('color');
  });
}
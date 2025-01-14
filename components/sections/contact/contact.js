import "./contact.css"

export const contact = () => {
  const contactSection = document.createElement('section')
  contactSection.className = 'contact contact-section'
  contactSection.id = 'contact'
  
  document.body.appendChild(contactSection)
  
  // CONTACT OPTIONS
  const contactDiv = document.createElement('div')
  contactDiv.className = 'contact contact-container'
  
  const infoContainer = document.createElement('div')
  infoContainer.className = 'contact info-container'
  
  const contactTitle = document.createElement('p')
  contactTitle.className = 'contact contact-title'
  contactTitle.innerHTML = '¿Quieres ponerte en <span class="contact-span">contacto</span> conmigo?'
  
  const contactText = document.createElement('p')
  contactText.className = 'contact contact-text'
  contactText.textContent = 'Dime en qué estás interesado...'
  
  // CONTACT BUTTONS
  const buttonsContainer = document.createElement('div')
  buttonsContainer.className = 'contact contact-buttons-container'
  
  const button1 = document.createElement('button')
  button1.className = 'contact contact-button-tag'
  button1.textContent = 'Data Base'
  
  const button2 = document.createElement('button')
  button2.className = 'contact contact-button-tag'
  button2.textContent = 'Landing Page'
  
  const button3 = document.createElement('button')
  button3.className = 'contact contact-button-tag'
  button3.textContent = 'Blog Website'
  
  const button4 = document.createElement('button')
  button4.className = 'contact contact-button-tag'
  button4.textContent = 'Web App'
  
  // CONTACT FORM
  const formDiv = document.createElement('div')
  formDiv.className = 'contact form-container'
  
  const contactForm = document.createElement('form')
  contactForm.className = 'contact form'
  
  const formName = document.createElement('input')
  formName.className = 'contact form-name'
  formName.type = 'text'
  formName.placeholder = 'Tu nombre'
  
  const formEmail = document.createElement('input')
  formEmail.className = 'contact form-email'
  formEmail.type = 'email'
  formEmail.placeholder = 'Tu correo electrónico'
  
  const formMessage = document.createElement('textarea')
  formMessage.className = 'contact form-message'
  formMessage.placeholder = 'Tu mensaje'
  
  const formButton = document.createElement('button')
  formButton.className = 'contact form-button'
  formButton.textContent = 'Enviar'
  
  // GENERATE HTML
  contactSection.appendChild(infoContainer)
  infoContainer.appendChild(contactDiv)
  infoContainer.appendChild(formDiv)
  
  // INFO AND BUTTONS
  contactDiv.appendChild(contactTitle)
  contactDiv.appendChild(contactText)
  contactDiv.appendChild(buttonsContainer)
  buttonsContainer.appendChild(button1)
  buttonsContainer.appendChild(button2)
  buttonsContainer.appendChild(button3)
  buttonsContainer.appendChild(button4)
  
  // FORM
  formDiv.appendChild(contactForm)
  contactForm.appendChild(formName)
  contactForm.appendChild(formEmail)
  contactForm.appendChild(formMessage)
  contactForm.appendChild(formButton)
}
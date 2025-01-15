import { hero } from "./components/sections/hero/hero"
import { skills } from "./components/sections/skills/skills"
import { skillImg } from "./components/functions/skillImg/skillImg"
import { experienceStudies } from "./components/sections/experience_studies/experienceStudies"
import { addExperience, addStudies } from "./components/functions/experience_studies/experience_studies"
import { projects } from "./components/sections/projects/projects"
import { addProject } from "./components/functions/project/project"
import { contact } from "./components/sections/contact/contact"
import { addLink } from "./components/functions/link/link"


// ----------------------------------------------------------------------------------
// HEADER
const header = document.createElement('header')
document.body.appendChild(header)

// HEADER - PORTFOLIO NAME
const pPortfolioName = document.createElement('p')
pPortfolioName.className = 'portfolio-name'
pPortfolioName.textContent = 'Àlex Meléndez Centeno'

// GENERATE HTML
header.appendChild(pPortfolioName)


// HEADER - MAIN MENU
const navMenu = document.createElement('nav')
navMenu.className = 'header nav-menu'

const ulMainMenu = document.createElement('ul')
ulMainMenu.className = 'header ul-main-menu'

const liHome = document.createElement('li')
liHome.className = 'header li-main-menu'

const aHome = document.createElement('a')
aHome.href = '#hero'
aHome.textContent = 'Inicio'

const liAboutMe = document.createElement('li')
liAboutMe.className = 'header li-main-menu'

const aAboutMe = document.createElement('a')
aAboutMe.href = '#hero-desc'
aAboutMe.textContent = 'Sobre mí'

const liSkills = document.createElement('li')
liSkills.className = 'header li-main-menu'

const aSkills = document.createElement('a')
aSkills.href = '#skills'
aSkills.textContent = 'Skills'

const liExperienceAndStudies = document.createElement('li')
liExperienceAndStudies.className = 'header li-main-menu'

const aExperienceAndStudies = document.createElement('a')
aExperienceAndStudies.href = '#e&s'
aExperienceAndStudies.textContent = 'Experiencia y Estudios'

const liProjects = document.createElement('li')
liProjects.className = 'header li-main-menu'

const aProjects = document.createElement('a')
aProjects.href = '#projects'
aProjects.textContent = 'Proyectos'

const aContact = document.createElement('a')
aContact.href = '#contact'

const pContact = document.createElement('p')
pContact.className = 'header-contact'
pContact.textContent = 'Contacto'

// GENERATE HTML
header.appendChild(navMenu)
navMenu.appendChild(ulMainMenu)
ulMainMenu.appendChild(liHome)
liHome.appendChild(aHome)
ulMainMenu.appendChild(liAboutMe)
liAboutMe.appendChild(aAboutMe)
ulMainMenu.appendChild(liSkills)
liSkills.appendChild(aSkills)
ulMainMenu.appendChild(liExperienceAndStudies)
liExperienceAndStudies.appendChild(aExperienceAndStudies)
ulMainMenu.appendChild(liProjects)
liProjects.appendChild(aProjects)
header.appendChild(aContact)
aContact.appendChild(pContact)

// HEADER - SMALL SCREEN MENU - MOBILE MENU
const compactMenu = document.createElement('div')
compactMenu.className = 'header menu-container'

const cMenuIcon = document.createElement('img')
cMenuIcon.className = 'header menu-icon'
cMenuIcon.src = '/src/menu-icon.png'
cMenuIcon.alt = 'Imagen botón menú'

const menuMobileWrapper = document.createElement('div')
menuMobileWrapper.className = 'header menu-mobile'

const ulMobileMenu = document.createElement('ul')
ulMobileMenu.className = 'header ul-mobile-menu'

const liMobileHome = document.createElement('li')
liMobileHome.className = 'header li-mobile-menu'

const aMobileHome = document.createElement('a')
aMobileHome.href = '#hero'
aMobileHome.textContent = 'Inicio'

const liMobileAboutMe = document.createElement('li')
liMobileAboutMe.className = 'header li-mobile-menu'

const aMobileAboutMe = document.createElement('a')
aMobileAboutMe.href = '#hero-desc'
aMobileAboutMe.textContent = 'Sobre mí'

const liMobileSkills = document.createElement('li')
liMobileSkills.className = 'header li-mobile-menu'

const aMobileSkills = document.createElement('a')
aMobileSkills.href = '#skills'
aMobileSkills.textContent = 'Skills'

const liMobileExperienceAndStudies = document.createElement('li')
liMobileExperienceAndStudies.className = 'header li-mobile-menu'

const aMobileExperienceAndStudies = document.createElement('a')
aMobileExperienceAndStudies.href = '#e&s'
aMobileExperienceAndStudies.textContent = 'Experiencia y Estudios'

const liMobileProjects = document.createElement('li')
liMobileProjects.className = 'header li-mobile-menu'

const aMobileProjects = document.createElement('a')
aMobileProjects.href = '#projects'
aMobileProjects.textContent = 'Proyectos'

const liMobileContact = document.createElement('li')
liMobileContact.className = 'header li-mobile-menu'

const aMobileContact = document.createElement('a')
aMobileContact.href = '#contact'
aMobileContact.textContent = 'Contacto'

// MOBILE MENU
header.appendChild(compactMenu)
compactMenu.appendChild(cMenuIcon)
header.appendChild(menuMobileWrapper)
menuMobileWrapper.appendChild(ulMobileMenu)
ulMobileMenu.appendChild(liMobileHome)
liMobileHome.appendChild(aMobileHome)
ulMobileMenu.appendChild(liMobileAboutMe)
liMobileAboutMe.appendChild(aMobileAboutMe)
ulMobileMenu.appendChild(liMobileSkills)
liMobileSkills.appendChild(aMobileSkills)
ulMobileMenu.appendChild(liMobileExperienceAndStudies)
liMobileExperienceAndStudies.appendChild(aMobileExperienceAndStudies)
ulMobileMenu.appendChild(liMobileProjects)
liMobileProjects.appendChild(aMobileProjects)
ulMobileMenu.appendChild(liMobileContact)
liMobileContact.appendChild(aMobileContact)

// TOGGLE MOBILE MENU
cMenuIcon.addEventListener('click', () => {
menuMobileWrapper.classList.toggle('active') // Toggle active class for the wrapper
})

// INTERACTION MOBILE MENU
const menuOptions = document.querySelectorAll('.header .li-mobile-menu'); // Selecciona todas las opciones del menú móvil

menuOptions.forEach(option => {
  option.addEventListener('click', () => {
    menuMobileWrapper.classList.remove('active'); // Esconde el menú
    document.body.style.overflow = 'auto'; // Restaura el scroll de la página
  });
});

// ----------------------------------------------------------------------------------
// HERO - SECTION + ABOUT ME (HERO DESCRIPTION)
hero()


// ----------------------------------------------------------------------------------
// SKILLS - SECTION
skills()

// ADD SKILLS IMGS
skillImg('HTML')
skillImg('CSS')
skillImg('JavaScript')
skillImg('Java')
skillImg("Csharp")
skillImg('APIs')
skillImg('Github')
skillImg('Figma')
skillImg('Visual Studio Code')
skillImg('PL-SQL')
skillImg('Oracle DBA')
skillImg('IBM Tivoli Workload Scheduler')
skillImg('PHP')
skillImg('Microsoft Windows Server')
skillImg('Linux Server')


// ----------------------------------------------------------------------------------
// EXPERIENCE & STUDIES - SECTION
// ADD EXPERIENCE
addExperience("Superior Systems Technician (DBA) en Minsait 07/2021 - 09/2024", "Trabajando en la creación, actualización y corrección de las bases de datos además de la automatización de procesos de carga en numerosos proyectos para entidades financieras.\nControl de errores y gestión de las bases de datos de desarrollo y de producción.")

addExperience("Systems Technician en Comsa 07/2019 - 09/2020", "Prácticas atendiendo peticiones de soporte técnico a través de helpdesk además de modificar, optimizar, corregir y crear automatizaciones de procesos para mejorar el rendimiento de las bases de datos, y colaborar con la actualización y mejora de la página web de la empresa y portal del empleado.")


// ADD STUDIES
addStudies("ThePower Busines School 01/2024 - Cursando", "FullStack Developer")
addStudies("ThePower Busines School 01/2024 - 01/2025", "JavaScript Developer")
addStudies("Pàlcam 09/2018 - 07/2020", "Ciclo de superior de administración de sistemas informáticos en red")
addStudies("Oracle Academy Online 09/2018 - 07/2020", "Database Design and Programming with SQL")
addStudies("Oracle Academy Online 09/2018 - 07/2020", "Database Programming with PL/SQL")
addStudies("Oracle Academy Online 09/2018 - 07/2020", "Java Programming")



experienceStudies()


// ----------------------------------------------------------------------------------
// PROJECTS - SECTION
projects()

// ADD PROJECTS
addProject('PComponentes', "El primer proyecto que hice para practicar el uso de html y css", "https://amcpcomponentesproject.netlify.app/")
addProject('Tienda online JD', "Proyecto recreando la tienda online de la marca JD, hecha solo con html y css", "https://amcjdstoreproject.netlify.app/")
addProject('Pinterest', "Proyecto recreando un web tipo pinterest, usando js por primera vez y api's para las imagenes", "https://amcpinterestproject.netlify.app/")
addProject('Porfolio', "Este porfolio está hecho únicamente con js y css, sin escribir código html directamente","https://alex-melendez-centeno-porfolio.netlify.app/")
addProject('Games Hub', "Proyecto portal de juegos, con al menos tres sencillos juegos hechos con JavaScript", "https://amcgameshubproject.netlify.app/")


// ----------------------------------------------------------------------------------
// CONTACT FORM - SECTION
contact()


// ----------------------------------------------------------------------------------
// FOOTER
const footer = document.createElement('footer')

document.body.appendChild(footer)

const footerText = document.createElement('p')
footerText.className = 'footer footer-text'
footerText.innerHTML = 'Diseñado por <span class="footer-span">Àlex Meléndez Centeno</span>'

const footerLinksContainer = document.createElement('div')
footerLinksContainer.className = 'footer footer-links-container'

// GENERATE HTML
footer.appendChild(footerText)
footer.appendChild(footerLinksContainer)

// ADD LINKS
addLink('linkedin2', 'https://www.linkedin.com/in/%C3%A0lex-mel%C3%A9ndez-centeno-a76353337/')
addLink('github2', 'https://github.com/AMelendez-27')
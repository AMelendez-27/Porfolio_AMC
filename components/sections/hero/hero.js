import "./hero.css"

export const hero = () => {
  const heroSection = document.createElement('section')
  heroSection.className = 'hero hero-section'
  heroSection.id = 'hero'

  document.body.appendChild(heroSection)

  // HERO TITLE
  const heroTopContainer = document.createElement('div')
  heroTopContainer.className = 'hero hero-top-container'

  const heroTitleContainer = document.createElement('div')
  heroTitleContainer.className = 'hero hero-title-container'

  const h1Hero = document.createElement('h1')
  h1Hero.className = 'hero hero-h1'
  h1Hero.textContent = 'Especializado en Desarrollo Web y Bases de Datos'

  const h2Hero = document.createElement('h2')
  h2Hero.className = 'hero hero-h2'
  h2Hero.textContent = 'Para mí, no es solo un trabajo, sino también un hobby'

  const h3Hero = document.createElement('h3')
  h3Hero.className = 'hero hero-h3'
  h3Hero.innerHTML = 'Este porfolio es uno de los primeros proyectos que he realizado para el máster de Desarrollo Full Stack de thePower. Gracias a este proyecto obtuve el título de desarrollador javascript por haberlo realizado únicamente con CSS y Javascript puro.<br>Además, más tarde obtendría también el título de desarrollador frontend gracias a otros proyectos también recopilados en este porfolio.'

  const heroImgContainer = document.createElement('div')
  heroImgContainer.className = 'hero hero-img-container'

  const heroImg = document.createElement('img')
  heroImg.className = 'hero hero-img'
  heroImg.src = '/src/desarrollador-web-profile-img.jpg';
  heroImg.alt = 'Imagen de Àlex Meléndez Centeno';

  // GENERATE HTML
  heroSection.appendChild(heroTopContainer)
  heroTopContainer.appendChild(heroTitleContainer)
  heroTitleContainer.appendChild(h1Hero)
  heroTitleContainer.appendChild(h2Hero)
  heroTitleContainer.appendChild(h3Hero)
  heroTopContainer.appendChild(heroImgContainer)
  heroImgContainer.appendChild(heroImg)

  // ABOUT ME - HERO DESCRIPTION
  const heroDescContainer = document.createElement('div')
  heroDescContainer.className = 'hero hero-desc-container'
  heroDescContainer.id = 'hero-desc'

  const heroDescTitle = document.createElement('h2')
  heroDescTitle.className = 'hero hero-description-title'
  heroDescTitle.textContent = 'Sobre mí'

  const heroDesc = document.createElement('p')
  heroDesc.className = 'hero hero-description'
  heroDesc.textContent = 'Desarrollador web apasionado por la creación de experiencias digitales innovadoras, para quien este campo es tanto un trabajo como un hobby. Disfruto explorando nuevas tecnologías y diseñando soluciones optimizadas que mejoren la interacción usuario-plataforma. Proactivo, adaptable y motivado por aprender y contribuir a equipos y proyectos ágiles de impacto real.'

  // GENERATE HTML
  heroSection.appendChild(heroDescContainer)
  heroDescContainer.appendChild(heroDescTitle)
  heroDescContainer.appendChild(heroDesc)
}
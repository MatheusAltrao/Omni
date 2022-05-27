window.addEventListener('scroll', onScroll)


function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
 
  const targetLine = scrollY + innerHeight / 2


  const sectionTop = section.offsetTop


  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop


  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine


  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}


function showNavOnScroll() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('scroll')
  } else {
    $('nav').removeClass('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}


function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}


ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img,
  #home header,
  #home .stats,
  #home .stat, 
  #services,
  #services header,
  #services .cards,
  #services .card,
  #about, 
  #about header, 
  #about .content,
  #contact header,
  #contact img`)

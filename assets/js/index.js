/*========== Navbar==========*/

const hamburger = document
  .querySelector('.icon-hamburger')
  .addEventListener('click', showList)
const listContainer = document.querySelector('.list-container')

function showList() {
  listContainer.classList.toggle('collapse')
}

const navLink = document.querySelectorAll('.item-list')

navLink.forEach(btn => btn.addEventListener('click', showList))

/*========== Modal ==========*/





/*========== Theme ==========*/
const themeButton = document.getElementById('theme')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'ligth'
const getCurrentIcon = () =>
  document.body.classList.contains(darkTheme)
    ? 'bx-moon'
    : 'bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  )
  themeButton.classList[
    selectedTheme === 'bx-moon' ? 'add' : 'remove'
  ](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*========== scroll reveal  ==========*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 800,
  reset: false
});

sr.reveal(`.img-container, .presentation-text, .presentation-subtitle, .presentation-media, .projects-intro, .projects-grid, .skills-code, .skills, .footer-sub`, {
  interval: 200
})

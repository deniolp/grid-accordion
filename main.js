import './style.css'

let opened = false

const changeLayout = (e) => {
  const num = e.currentTarget.className.charAt(e.currentTarget.className.length - 1)
  const container = document.querySelector(`.${!opened ? 'grid' : 'grid--changed'}`)
  container.className = `container ${opened ? 'grid' : `grid--changed grid--changed__${num}`}`
  opened = !opened
}

const links = document.querySelectorAll('a')
const elements = Array.from(links)


for (const el of elements) {
  el.addEventListener('click', changeLayout)
}

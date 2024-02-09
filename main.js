import './style.css'

let opened = false
let num = null

const changeLayout = (e) => {
  const container = document.querySelector(`.${!opened ? 'grid' : 'grid--changed'}`)

  if (num && e.currentTarget.className.charAt(e.currentTarget.className.length - 1) !== num) {
    num = e.currentTarget.className.charAt(e.currentTarget.className.length - 1)
    container.className = `container grid--changed grid--changed__${num}`
    opened = true
    return
  }

  num = e.currentTarget.className.charAt(e.currentTarget.className.length - 1)
  container.className = `container ${opened ? 'grid' : `grid--changed grid--changed__${num}`}`
  opened = !opened
}

const links = document.querySelectorAll('a')
const elements = Array.from(links)

for (const el of elements) {
  el.addEventListener('click', changeLayout)
}

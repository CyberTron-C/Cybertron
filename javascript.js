// navbar for mobile 
function menu() {
  let nav = document.getElementById('nav')
  let menu = document.getElementById('menu')
  if (nav.style.display === 'flex') {
    nav.style.display = 'none'
    menu.innerHTML = '<i class="fas fa-bars"></i>'
  } else {
    nav.style.display = 'flex'
    menu.innerHTML = '<i class="fas fa-times"></i>'
  }
}

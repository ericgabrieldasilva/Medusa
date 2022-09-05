const btnMenu = document.querySelector('#btn-menu')
const body = document.querySelector('body')
const overlayLoading = document.querySelector('.overlay-loading')

// hide overlay
window.onload = function(){
  overlayLoading.classList.add('hide-overlay-loading')
}

// Show menu
btnMenu.addEventListener('click', () =>{
  body.classList.toggle('show-menu')
})

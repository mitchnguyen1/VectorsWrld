let toggleButton = document.getElementsByClassName('toggle-button')[0];
let navBarLinks = document.getElementsByClassName('navbar-links')[0];
let head = document.getElementsByClassName("heading")[0];
toggleButton.addEventListener("click", ()=>{
  navBarLinks.classList.toggle('active')
  head.classList.toggle('active')
})
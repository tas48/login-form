const toggle = document.querySelector('.theme-toggle');
const toggleImg = document.querySelector('.toggle-img');
const bg = document.querySelector('.light');
const container = document.querySelector('.light-container');
const logo = document.querySelector('.logo');
const inputs = document.querySelectorAll('.light-input-field');
const submit = document.querySelector('.light-sub-button');
const asideImg = document.querySelector('.light-aside-img');
const link = document.querySelector('.info > p');


toggle.addEventListener('click', () => {

  let lightContainer = container.classList.contains('light-container');

  if(lightContainer){
    container.classList.replace('light-container', 'dark-container');
    logo.setAttribute('src', 'http://localhost:5500/assets/icons/logo-dark.svg');
    bg.classList.replace('light', 'dark');
    toggleImg.setAttribute('src','http://localhost:5500/assets/icons/sun.svg');
    asideImg.setAttribute('src', 'http://localhost:5500/assets/img/aside-image-dark.svg');
    
    inputs.forEach(input => {
      input.classList.replace('light-input-field', 'dark-input-field');

      link.style.color = "#f2f2f2";
    });
  }
  else{
    container.classList.replace('dark-container', 'light-container');
    logo.src = "http://localhost:5500/assets/icons/logo-dark.svg";
    logo.setAttribute('src', 'http://localhost:5500/assets/icons/logo.svg');
    bg.classList.replace('dark', 'light');
    toggleImg.setAttribute('src','http://localhost:5500/assets/icons/moon.svg');
    asideImg.setAttribute('src', 'http://localhost:5500/assets/img/aside-login-img.svg');

    inputs.forEach(input => {
      input.classList.replace('dark-input-field', 'light-input-field');

      link.style.color = "#2f2f2f";
    });
  }
    


  // if(lightInputs){
  //   inputs[0].classList.replace('light-input-field', 'dark-input-field');
    
    
  // }


});
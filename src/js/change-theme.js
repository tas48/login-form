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
  let page = witchPage();

  if(page.endsWith('index.html')){
    changeTheme("assets/icons/");
  }
  else{
    changeTheme("../../assets/icons/");
  }

});

function changeTheme(path){
  let lightContainer = container.classList.contains('light-container');

  if(lightContainer){
    container.classList.replace('light-container', 'dark-container');

    setTimeout(() => {
      logo.setAttribute('src', `${path}logo-dark.svg`);
      bg.classList.replace('light', 'dark');
      toggleImg.setAttribute('src',`${path}sun.svg`);
      asideImg.setAttribute('src', `${path}aside-image-dark.svg`);
    }, 100);
    
    inputs.forEach(input => {
      input.classList.replace('light-input-field', 'dark-input-field');
    });

    submit.classList.replace('light-sub-button', 'dark-sub-button');
    link.style.color = "#f2f2f2";
  }

  else{
    container.classList.replace('dark-container', 'light-container');
  
    setTimeout(() => {
      logo.setAttribute('src', `${path}logo.svg`);
      bg.classList.replace('dark', 'light');
      toggleImg.setAttribute('src',`${path}moon.svg`);
      asideImg.setAttribute('src', `${path}aside-login-img.svg`);
    }, 100);

    inputs.forEach(input => {
      input.classList.replace('dark-input-field', 'light-input-field');
    });
    
    submit.classList.replace( 'dark-sub-button', 'light-sub-button');
    link.style.color = "#2f2f2f";
  }
}

function witchPage(){
  return window.location.pathname;
}
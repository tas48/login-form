let validate = () => {    
  let pass = document.getElementById('password').value;
  let confirmPass = document.getElementById('confirm-password').value;

  if(pass != confirmPass){
      document.querySelector('.check-message')
      document.querySelector('.check-message').innerHTML = 'Senhas não são iguais';
  }
  else{
      document.querySelector('.check-message').innerHTML = '';
  }
}


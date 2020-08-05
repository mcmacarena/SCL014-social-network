// Este es el punto de entrada de tu aplicacion
import { contentInitialPage, contentSignIn, contentHome } from './lib/index copy.js';
import { registerNewUser, logInUser, mailAutentification } from './lib/firebase.js'

const render = (hash) => {
  const screen = document.getElementById('screens');
  if(hash === ''){
    return screen.innerHTML=contentInitialPage();
  }
  if (hash === '#/SignIn') {
    screen.innerHTML='';
    return screen.innerHTML=contentSignIn()
  }
  else if (hash === '#/createProfile') {
    screen.innerHTML='';
    return screen.innerHTML=contentHome()
  } 
}





  
  


// const logIn = () => {
//   const email = document.querySelector('#newUserEmail').value;
//   const password = document.querySelector('#newUserPassword').value;

//   document.querySelector('#btnLogin').addEventListener('click', logInUser(email, password));
// }








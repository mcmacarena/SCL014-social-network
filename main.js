// Este es el punto de entrada de tu aplicacion
import { contentInitialPage, contentSignIn, contentHome } from './lib/index.js';
import { registerNewUser, logInUser } from './lib/firebase.js'

const render = (hash) => {
  const screen = document.getElementById('screens');
  if(hash === ''){
    contentInitialPage();
  }
  if (hash === '#/SignIn') {
    screen.innerHTML='';
    contentSignIn()
  }
  else if (hash === '#/createProfile') {
    screen.innerHTML='';
    contentHome()
  } 
}
const changePage = () => {
  render(window.location.hash);
}
window.addEventListener('hashchange', changePage);
window.addEventListener('load', changePage)



  

  


// const logIn = () => {
//   const email = document.querySelector('#newUserEmail').value;
//   const password = document.querySelector('#newUserPassword').value;

//   document.querySelector('#btnLogin').addEventListener('click', logInUser(email, password));
// }








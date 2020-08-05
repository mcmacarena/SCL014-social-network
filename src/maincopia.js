// Este es el punto de entrada de tu aplicacion
import { contentInitialPage, contentSignIn, contentHome } from './lib/index copy.js';
import { registerNewUser, logInUser, mailAutentification } from './lib/firebase.js'

const init = () =>{
  document.getElementById('screens').innerHTML
  cambioRuta(window.location.hash)
  window.addEventListener('hashchange', () =>{
    cambioRuta(window.location.hash)
  });
}

const signIn = () => {
  const email = document.querySelector('#newUserEmail').value;
  const password = document.querySelector('#newUserPassword').value;
  // document.querySelector('#btnHomeSignIn').addEventListener('click', registerNewUser(email, password));
}
const cambioVista = (hash) =>{
  const screen = document.getElementById('screens');
  if(hash === ''){
    return contentInitialPage();
  }
  if (hash === '#/SignIn') {
    return contentSignIn();
  }
  if (hash === '#/createProfile') { 
    return contentHome();
  } 
}

const cambioRuta = (hash) => {
  console.log(window.location.hash)
  if(hash === ''){
    return cambioVista(hash);
  }
  if (hash === '#/SignIn') {
    return cambioVista(hash)
  }
  if (hash === '#/createProfile') { 
    return cambioVista(hash)
  } 
  return console.log('no hay pagina')
}



// const changePage = () => {
//   render(window.location.hash);
// }
// window.addEventListener('hashchange', changePage);

window.addEventListener('load', init)


// if (window.location.hash === '#/SignIn'){
 
  
  document.querySelector('#btnContinue4').addEventListener('click', signIn);
// }

  

// const logIn = () => {
//   const email = document.querySelector('#newUserEmail').value;
//   const password = document.querySelector('#newUserPassword').value;

//   document.querySelector('#btnLogin').addEventListener('click', logInUser(email, password));
// }








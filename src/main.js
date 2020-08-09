// Este es el punto de entrada de tu aplicacion
import { contentInitialPage } from './lib/templates/initialPage.js';
import { contentSignIn } from './lib/templates/signIn.js';
import { contentHome } from './lib/templates/home.js';
import { contentMyProfile } from './lib/templates/myProfile.js';
import { contentlikedDog } from './lib/templates/likedDog.js';
import { contentCreateProfile } from './lib/templates/createProfile.js'
import { logIn, signInGoogle, nextPage, finishRegistration, signIn, createProfileNext, infoProfile , disabledButton, createProfileBegin} from './lib/index.js';
import { watchMen, accessData } from './lib/firebase.js';

const render = (hash) => {
  const screen = document.getElementById('screens');
  if (hash === '') {
    screen.innerHTML = contentInitialPage();
    document.querySelector('#btnLogin').addEventListener('mousedown', logIn);
    document.querySelector('#btnGoogle').addEventListener('click', signInGoogle)
  }
  if (hash === '#/SignIn') {
    screen.innerHTML = contentSignIn();
    document.querySelector('#btnToPassword').addEventListener('click', nextPage);
    document.querySelector('#btnDoneSignIn').addEventListener('click', finishRegistration);
    document.querySelector('#btnDoneSignIn').addEventListener('mousedown', signIn);
  }
  if (hash === '#/Home') {
    screen.innerHTML = contentHome();
  }
  if (hash === '#/myProfile') {
    screen.innerHTML = contentMyProfile();

    accessData()
  }
  if (hash === '#/LikedDogs') {
    screen.innerHTML = contentlikedDog();
  }
  if (hash === '#/createProfile') {
    screen.innerHTML = contentCreateProfile();
    disabledButton();
    for (let i = 1; i < 16; i++) {
      document.querySelector('#btnCreateProfile' + i + '').addEventListener('click', createProfileNext[i - 1]);
    }
    document.querySelector('#btnCreateProfile16').addEventListener('click', infoProfile)
    document.querySelector('#nameDog').addEventListener('keyup', createProfileBegin)
  }
}

const changePage = () => {
  render(window.location.hash);
}

window.addEventListener('hashchange', changePage);
window.addEventListener('load', changePage);


// Este es el punto de entrada de tu aplicacion
import { contentInitialPage } from './lib/templates/initialPage.js';
import { contentSignIn } from './lib/templates/signIn.js';
import { contentHome } from './lib/templates/home.js';
import { contentMyProfile } from './lib/templates/myProfile.js';
import { contentlikedDog } from './lib/templates/likedDog.js';
import { contentCreateProfile } from './lib/templates/createProfile.js'
import { logIn, signInGoogle, nextPage, finishRegistration, signIn, createProfileNext1, createProfileNext2, createProfileNext3,
  createProfileNext4, createProfileNext5 , createProfileNext6, createProfileNext7, createProfileNext8, createProfileNext9, createProfileNext10,
  createProfileNext11, createProfileNext12, createProfileNext13, createProfileNext14, createProfileNext15} from './lib/index.js';

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
  }
  if (hash === '#/LikedDogs') {
    screen.innerHTML = contentlikedDog();
  }
  if (hash === '#/createProfile') {
    screen.innerHTML = contentCreateProfile();
    document.querySelector('#btnCreateProfile1').addEventListener('click',createProfileNext1);
    document.querySelector('#btnCreateProfile2').addEventListener('click',createProfileNext2);
    document.querySelector('#btnCreateProfile3').addEventListener('click',createProfileNext3);
    document.querySelector('#btnCreateProfile4').addEventListener('click',createProfileNext4);
    document.querySelector('#btnCreateProfile5').addEventListener('click',createProfileNext5);
    document.querySelector('#btnCreateProfile6').addEventListener('click',createProfileNext6);
    document.querySelector('#btnCreateProfile7').addEventListener('click',createProfileNext7);
    document.querySelector('#btnCreateProfile8').addEventListener('click',createProfileNext8);
    document.querySelector('#btnCreateProfile9').addEventListener('click',createProfileNext9);
    document.querySelector('#btnCreateProfile10').addEventListener('click',createProfileNext10);
    document.querySelector('#btnCreateProfile11').addEventListener('click',createProfileNext11);
    document.querySelector('#btnCreateProfile12').addEventListener('click',createProfileNext12);
    document.querySelector('#btnCreateProfile13').addEventListener('click',createProfileNext13);
    document.querySelector('#btnCreateProfile14').addEventListener('click',createProfileNext14);
    document.querySelector('#btnCreateProfile15').addEventListener('click',createProfileNext15);
  }
}

const changePage = () => {
  render(window.location.hash);
}

window.addEventListener('hashchange', changePage);
window.addEventListener('load', changePage);

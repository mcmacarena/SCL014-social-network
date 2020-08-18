/* eslint-disable no-plusplus */
// Este es el punto de entrada de tu aplicacion
import { contentInitialPage } from './lib/templates/initialPage.js';
import { contentSignIn } from './lib/templates/signIn.js';
import { contentMyProfileEmpty } from './lib/templates/myProfileEmpty.js';
import { contentMyProfile } from './lib/templates/myProfile.js';
import { contentlikedDog } from './lib/templates/likedDog.js';
import { contentHome } from './lib/templates/home.js';
import { contentCreateProfile } from './lib/templates/createProfile.js';
import { contentProfileOtherDog } from './lib/templates/profileOtherDog.js'
import {
  createProfileNext, disabledButton, createProfileBegin, closeCreateProfile,
} from './lib/screensCreateProfile.js';
import {
  signIn, logIn, signInGoogle, nextPage, finishRegistration, infoProfile,
  photoProfileUpload, photoProfileDownload, closeSession, 
} from './lib/index.js';
import {
  accessData, showDogHome, likeDog, showLikeDog, deleteMyProfile, dislikeDog, otherProfile, commentDog,
} from './lib/firebase.js';

const render = (hash) => {
  const screen = document.getElementById('screens');
  if (hash === '') {
    screen.innerHTML = contentInitialPage();
    document.querySelector('#btnLogin').addEventListener('mousedown', logIn);
    document.querySelector('#btnGoogle').addEventListener('click', signInGoogle);
  }
  if (hash === '#/SignIn') {
    screen.innerHTML = contentSignIn();
    document.querySelector('#btnToPassword').addEventListener('click', nextPage);
    document.querySelector('#btnDoneSignIn').addEventListener('click', finishRegistration);
    document.querySelector('#btnDoneSignIn').addEventListener('mousedown', signIn);
  }
  if (hash === '#/myProfileEmpty') {
    screen.innerHTML = contentMyProfileEmpty();
    document.querySelector('#cerrarbtn').addEventListener('click', closeSession);
    document.querySelector('.toggle').addEventListener('click', () => {
      document.getElementById('menuBar').classList.toggle('active');
    });
  }
  if (hash === '#/myProfile') {
    screen.innerHTML = contentMyProfile();
    accessData();
    photoProfileDownload();
    document.querySelector('.toggle').addEventListener('click', () => {
      document.getElementById('menuBar').classList.toggle('active');
    });
    document.querySelector('.eliminateProfile').addEventListener('click', deleteMyProfile);
  }
  if (hash === '#/Home') {
    screen.innerHTML = contentHome();
    setTimeout(showDogHome, 300)
    document.querySelector('#contentHome').addEventListener('click', likeDog)
  }
  if (hash === '#/LikedDogs') {
    screen.innerHTML = contentlikedDog();
    setTimeout(showLikeDog, 300);
    document.querySelector('#likesProfiles').addEventListener('click', dislikeDog);
    document.querySelector('#likesProfiles').addEventListener('click', otherProfile);

  }
  if (hash === '#/createProfile') {
    screen.innerHTML = contentCreateProfile();
    disabledButton();
    for (let i = 1; i < 16; i++) {
      document.querySelector(`#btnCreateProfile${i}`).addEventListener('click', createProfileNext[i - 1]);
    }
    document.querySelector('#btnCreateProfile16').addEventListener('click', infoProfile);
    createProfileBegin();
    photoProfileUpload();
    closeCreateProfile();
  }
  if (hash === '#/otherDogProfile') {
    screen.innerHTML = contentProfileOtherDog();
    document.querySelector('.btnComment').addEventListener('click',commentDog)

  }
};

const changePage = () => {
  render(window.location.hash);
};

window.addEventListener('hashchange', changePage);
window.addEventListener('load', changePage);

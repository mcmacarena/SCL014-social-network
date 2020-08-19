import {
  registerNewUser, logInUser, googleSignIn, uploadInfo, uploadProfilePhoto,
  downloadProfilePhoto, close,
} from './firebase.js';


// INITIAL PAGE
// Funcionalidad Log in
export const logIn = () => {
  const buttonLogin = document.querySelector('#btnLogin');
  const email = document.querySelector('#userEmail').value;
  const password = document.querySelector('#userPassword').value;
  buttonLogin.addEventListener('click', logInUser(email, password));
};
// Funcionalidad Register/LogIn con Google
export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  googleSignIn(provider);
};

// SIGN IN
// Movernos en el signIn del correo a la contraseña
export const firstPageSignIn = () => {
  document.querySelector('#btnToPassword').disabled = true
  document.querySelector('#mailQuestionSignIn').classList.remove('hide');
  document.querySelector('#newUserEmail').addEventListener('keyup', () => {
    if (document.querySelector('#newUserEmail').value !== '') {
      document.querySelector('#btnToPassword').disabled = false;
      document.querySelector('#btnToPassword').classList.remove('hideButton');
      document.querySelector('#btnToPassword').classList.add('btnContinue');
    } else {
      document.querySelector('#btnToPassword').disabled = true;
      document.querySelector('#btnToPassword').classList.add('hideButton');
      document.querySelector('#btnToPassword').classList.remove('btnContinue');
    }
  });
};

export const nextPage = () => {
  document.querySelector('#btnDoneSignIn').disabled = true
  document.querySelector('#mailQuestionSignIn').classList.add('hide');
  document.querySelector('#passwordQuestionSignIn').classList.remove('hide');
  document.querySelector('#newUserPassword').addEventListener('keyup', () => {
    if (document.querySelector('#newUserPassword').value !== '') {
      document.querySelector('#btnDoneSignIn').disabled = false;
      document.querySelector('#btnDoneSignIn').classList.remove('hideButton');
      document.querySelector('#btnDoneSignIn').classList.add('btnContinue');
    } else {
      document.querySelector('#btnDoneSignIn').disabled = true;
      document.querySelector('#btnDoneSignIn').classList.add('hideButton');
      document.querySelector('#btnDoneSignIn').classList.remove('btnContinue');
    }
  });
  document.querySelector('#back').addEventListener('click', () => {
    firstPageSignIn();
    document.querySelector('#passwordQuestionSignIn').classList.add('hide');
  });
};

// Movernos en el SignIn de la contraseña a pantalla final registro
export const finishRegistration = () => {
  document.querySelector('#passwordQuestionSignIn').classList.add('hide');
  document.querySelector('#doneSignIn').classList.remove('hide');
  document.querySelector('#back').addEventListener('click', () => {
    nextPage();
    document.querySelector('#doneSignIn').classList.add('hide');
  });
};


// LOG OUT
export const closeSession = () => {
  close();
};


// Funcionalidad del Sign in (con firebase)
export const signIn = () => {
  const email = document.querySelector('#newUserEmail').value;
  const password = document.querySelector('#newUserPassword').value;
  document.querySelector('#btnDoneSignIn').addEventListener('mouseup', registerNewUser(email, password));
};

// Guarda toda la información de la creación del perfil
export const infoProfile = () => {
  const nameDogLocal = document.querySelector('#nameDog').value;
  const sexDogLocal = document.querySelector('#sexDog').value;
  const ageDogLocal = document.querySelector('#ageDog').value;
  const locationDogLocal = document.querySelector('#locationDog').value;
  const placeDog1Local = document.querySelector('#placeDog1').value;
  const placeDog2Local = document.querySelector('#placeDog2').value;
  const placeDog3Local = document.querySelector('#placeDog3').value;
  const sizeDogLocal = document.querySelector('#sizeDog').value;
  const biographyDogLocal = document.querySelector('#biographyDog').value;

  // Array de personalidades del perro checkeadas
  const personalityDogLocal = document.querySelectorAll('input[name=personality]:checked');
  const personalityDogLocalValues = [];
  for (let i = 0; i < 7; i += 1) {
    if (personalityDogLocal[i] !== undefined) {
      personalityDogLocalValues[i] = personalityDogLocal[i].value;
    } else {
      personalityDogLocalValues[i] = '';
    }
    document.querySelector('#back').addEventListener('click', () => {
      // createProfileNext4();
      document.querySelector('#placesDogQuestion').classList.add('hide');
    });
  }

  // Array de horarios de personalidades del perro checkeadas
  const scheduleDogLocal = document.querySelectorAll('input[name=schedule]:checked');
  const scheduleDogLocalValues = [];
  for (let i = 0; i < 3; i += 1) {
    if (scheduleDogLocal[i] !== undefined) {
      scheduleDogLocalValues[i] = scheduleDogLocal[i].value;
    } else {
      scheduleDogLocalValues[i] = '';
    }
  }

  // Array de  personalidades preferentes del perro checkeadas
  const personalityDogPreferenceLocal = document.querySelectorAll('input[name=personalityPreference]:checked');
  const personalitysDogPreferenceLocalValues = [];
  for (let i = 0; i < 7; i += 1) {
    if (personalityDogPreferenceLocal[i] !== undefined) {
      personalitysDogPreferenceLocalValues[i] = personalityDogPreferenceLocal[i].value;
    } else {
      personalitysDogPreferenceLocalValues[i] = '';
    }
  }

  // Array de sexo preferentes del perro checkeadas
  const sexDogPreferenceLocal = document.querySelectorAll('input[name=sexPreference]:checked');
  const sexDogPreferenceLocalValues = [];
  for (let i = 0; i < 2; i += 1) {
    if (sexDogPreferenceLocal[i] !== undefined) {
      sexDogPreferenceLocalValues[i] = sexDogPreferenceLocal[i].value;
    } else {
      sexDogPreferenceLocalValues[i] = '';
    }
  }

  // Array de tamaños preferentes del perro checkeadas
  const sizeDogPreferenceLocal = document.querySelectorAll('input[name=sizePreference]:checked');
  const sizeDogPreferenceLocalValues = [];
  for (let i = 0; i < 3; i += 1) {
    if (sizeDogPreferenceLocal[i] !== undefined) {
      sizeDogPreferenceLocalValues[i] = sizeDogPreferenceLocal[i].value;
    } else {
      sizeDogPreferenceLocalValues[i] = '';
    }
  }

  // Array de horarios del perro checkeadas
  const scheduleDogPreferenceLocal = document.querySelectorAll('input[name=schedulePreference]:checked');
  const scheduleDogPreferenceLocalValues = [];
  for (let i = 0; i < 3; i += 1) {
    if (scheduleDogPreferenceLocal[i] !== undefined) {
      scheduleDogPreferenceLocalValues[i] = scheduleDogPreferenceLocal[i].value;
    } else {
      scheduleDogPreferenceLocalValues[i] = '';
    }
  }

  uploadInfo(nameDogLocal, sexDogLocal, ageDogLocal, locationDogLocal, placeDog1Local,
    placeDog2Local, placeDog3Local, sizeDogLocal, biographyDogLocal,
    personalityDogLocalValues[0], personalityDogLocalValues[1],
    personalityDogLocalValues[2], personalityDogLocalValues[3],
    personalityDogLocalValues[4], personalityDogLocalValues[5],
    personalityDogLocalValues[6], scheduleDogLocalValues[0],
    scheduleDogLocalValues[1], scheduleDogLocalValues[2],
    sexDogPreferenceLocalValues[0], sexDogPreferenceLocalValues[1],
    sizeDogPreferenceLocalValues[0], sizeDogPreferenceLocalValues[1],
    sizeDogPreferenceLocalValues[2], personalitysDogPreferenceLocalValues[0],
    personalitysDogPreferenceLocalValues[1], personalitysDogPreferenceLocalValues[2],
    personalitysDogPreferenceLocalValues[3], personalitysDogPreferenceLocalValues[4],
    personalitysDogPreferenceLocalValues[5], personalitysDogPreferenceLocalValues[6],
    scheduleDogPreferenceLocalValues[0], scheduleDogPreferenceLocalValues[1],
    scheduleDogPreferenceLocalValues[2]);
};

// SUBIR FOTO

export const photoProfileUpload = () => {
  document.querySelector('#photoDog').addEventListener('change', (e) => {
    const photoDogLocal = e.target.files[0]
    uploadProfilePhoto(photoDogLocal);
  })
};

export const photoProfileDownload = () => {
  downloadProfilePhoto();
};

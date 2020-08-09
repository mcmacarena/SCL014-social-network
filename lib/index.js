import { registerNewUser, logInUser, googleSignIn, watchMen, uploadInfo } from './firebase.js'

// INITIAL PAGE
// Funcionalidad Log in
export const logIn = () => {
  const buttonLogin = document.querySelector('#btnLogin');
  const email = document.querySelector('#userEmail').value;
  const password = document.querySelector('#userPassword').value;
  buttonLogin.addEventListener('click', logInUser(email, password));
}
// Funcionalidad Register/LogIn con Google
export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  googleSignIn(provider);
}

// SIGN IN 
// Movernos en el signIn del correo a la contraseña 
export const nextPage = () => {
  document.querySelector('#mailQuestionSignIn').classList.add('hide');
  document.querySelector('#passwordQuestionSignIn').classList.remove('hide');
};

// Movernos en el SignIn de la contraseña a pantalla final registro
export const finishRegistration = () => {
  document.querySelector('#passwordQuestionSignIn').classList.add('hide');
  document.querySelector('#doneSignIn').classList.remove('hide');
};

// Funcionalidad del Sign in (con firebase)
export const signIn = () => {
  const email = document.querySelector('#newUserEmail').value;
  const password = document.querySelector('#newUserPassword').value;
  document.querySelector('#btnDoneSignIn').addEventListener('mouseup', registerNewUser(email, password));
}

// CREATE PROFILE
// question 1 to question 2
export const createProfileNext1 = () => {
  document.querySelector('#nameDogQuestion').classList.add('hide');
  document.querySelector('#sexDogQuestion').classList.remove('hide');
}

// question 2 to question 3
export const createProfileNext2 = () => {
  document.querySelector('#sexDogQuestion').classList.add('hide');
  document.querySelector('#photoDogQuestion').classList.remove('hide');
}

// question 3 to question 4
export const createProfileNext3 = () => {
  document.querySelector('#photoDogQuestion').classList.add('hide');
  document.querySelector('#ageDogQuestion').classList.remove('hide');
}

// question 4 to question 5
export const createProfileNext4 = () => {
  document.querySelector('#ageDogQuestion').classList.add('hide');
  document.querySelector('#locationDogQuestion').classList.remove('hide');
}

// question 5 to question 6
export const createProfileNext5 = () => {
  document.querySelector('#locationDogQuestion').classList.add('hide');
  document.querySelector('#placesDogQuestion').classList.remove('hide');
}

// question 6 to question 7
export const createProfileNext6 = () => {
  document.querySelector('#placesDogQuestion').classList.add('hide');
  document.querySelector('#sizeDogQuestion').classList.remove('hide');
}

// question 7 to question 8
export const createProfileNext7 = () => {
  document.querySelector('#sizeDogQuestion').classList.add('hide');
  document.querySelector('#personalityDogQuestion').classList.remove('hide');
}

// question 8 to question 9
export const createProfileNext8 = () => {
  document.querySelector('#personalityDogQuestion').classList.add('hide');
  document.querySelector('#scheduleDogQuestion').classList.remove('hide');
}

// question 9 to question 10
export const createProfileNext9 = () => {
  document.querySelector('#scheduleDogQuestion').classList.add('hide');
  document.querySelector('#biographyDogQuestion').classList.remove('hide');
}

// question 10 to question OTHER DOG
export const createProfileNext10 = () => {
  document.querySelector('#biographyDogQuestion').classList.add('hide');
  document.querySelector('#screenOtherDogQuestion').classList.remove('hide');
}

// question OTHER DOG to question 12
export const createProfileNext11 = () => {
  document.querySelector('#screenOtherDogQuestion').classList.add('hide');
  document.querySelector('#sexPreferencesDogQuestion').classList.remove('hide');
}

// question 12 to question 13
export const createProfileNext12 = () => {
  document.querySelector('#sexPreferencesDogQuestion').classList.add('hide');
  document.querySelector('#sizePreferencesDogQuestion').classList.remove('hide');
}

// question 13 to question 14
export const createProfileNext13 = () => {
  document.querySelector('#sizePreferencesDogQuestion').classList.add('hide');
  document.querySelector('#personalityPreferencesDogQuestion').classList.remove('hide');
}

// question 14 to question 15
export const createProfileNext14 = () => {
  document.querySelector('#personalityPreferencesDogQuestion').classList.add('hide');
  document.querySelector('#schedulePreferencesDogQuestion').classList.remove('hide');
}

// question 15 to FINAL SCREEN
export const createProfileNext15 = () => {
  document.querySelector('#schedulePreferencesDogQuestion').classList.add('hide');
  document.querySelector('#finishPreferencesDogQuestion').classList.remove('hide');
}

export const createProfileNext = [createProfileNext1, createProfileNext2, createProfileNext3, createProfileNext4, createProfileNext5,
  createProfileNext6, createProfileNext7, createProfileNext8, createProfileNext9, createProfileNext10, createProfileNext11,
  createProfileNext12, createProfileNext13, createProfileNext14, createProfileNext15]

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
  for (let i = 0; i < 7; i++) {
    if (personalityDogLocal[i] !== undefined) {
      personalityDogLocalValues[i] = personalityDogLocal[i].value;
    } else {
      personalityDogLocalValues[i] = '';
    }
  };

  // Array de horarios de personalidades del perro checkeadas
  const scheduleDogLocal = document.querySelectorAll('input[name=schedule]:checked');
  const scheduleDogLocalValues = [];
  for (let i = 0; i < 3; i++) {
    if (scheduleDogLocal[i] !== undefined) {
      scheduleDogLocalValues[i] = scheduleDogLocal[i].value;
    } else {
      scheduleDogLocalValues[i] = '';
    }
  };

  // Array de  personalidades preferentes del perro checkeadas
  const personalityDogPreferenceLocal = document.querySelectorAll('input[name=personalityPreference]:checked');
  const personalitysDogPreferenceLocalValues = [];
  for (let i = 0; i < 7; i++) {
    if (personalityDogPreferenceLocal[i] !== undefined) {
      personalitysDogPreferenceLocalValues[i] = personalityDogPreferenceLocal[i].value;
    } else {
      personalitysDogPreferenceLocalValues[i] = '';
    }
  };

  // Array de sexo preferentes del perro checkeadas
  const sexDogPreferenceLocal = document.querySelectorAll('input[name=sexPreference]:checked');
  const sexDogPreferenceLocalValues = [];
  for (let i = 0; i < 2; i++) {
    if (sexDogPreferenceLocal[i] !== undefined) {
      sexDogPreferenceLocalValues[i] = sexDogPreferenceLocal[i].value;
    } else {
      sexDogPreferenceLocalValues[i] = '';
    }
  };

  // Array de tamaños preferentes del perro checkeadas
  const sizeDogPreferenceLocal = document.querySelectorAll('input[name=sizePreference]:checked');
  const sizeDogPreferenceLocalValues = [];
  for (let i = 0; i < 3; i++) {
    if (sizeDogPreferenceLocal[i] !== undefined) {
      sizeDogPreferenceLocalValues[i] = sizeDogPreferenceLocal[i].value;
    } else {
      sizeDogPreferenceLocalValues[i] = '';
    }
  };

  // Array de horarios del perro checkeadas
  const scheduleDogPreferenceLocal = document.querySelectorAll('input[name=schedulePreference]:checked');
  const scheduleDogPreferenceLocalValues = [];
  for (let i = 0; i < 3; i++) {
    if (scheduleDogPreferenceLocal[i] !== undefined) {
      scheduleDogPreferenceLocalValues[i] = scheduleDogPreferenceLocal[i].value;
    } else {
      scheduleDogPreferenceLocalValues[i] = '';
    }
  };

  uploadInfo(nameDogLocal, sexDogLocal, ageDogLocal, locationDogLocal, placeDog1Local, placeDog2Local, placeDog3Local, sizeDogLocal, biographyDogLocal,
    personalityDogLocalValues[0], personalityDogLocalValues[1], personalityDogLocalValues[2], personalityDogLocalValues[3], personalityDogLocalValues[4],
    personalityDogLocalValues[5], personalityDogLocalValues[6], scheduleDogLocalValues[0], scheduleDogLocalValues[1], scheduleDogLocalValues[2],
    sexDogPreferenceLocalValues[0], sexDogPreferenceLocalValues[1], sizeDogPreferenceLocalValues[0], sizeDogPreferenceLocalValues[1],
    sizeDogPreferenceLocalValues[2], personalitysDogPreferenceLocalValues[0], personalitysDogPreferenceLocalValues[1], personalitysDogPreferenceLocalValues[2],
    personalitysDogPreferenceLocalValues[3], personalitysDogPreferenceLocalValues[4], personalitysDogPreferenceLocalValues[5],
    personalitysDogPreferenceLocalValues[6], scheduleDogPreferenceLocalValues[0], scheduleDogPreferenceLocalValues[1], scheduleDogPreferenceLocalValues[2])
}



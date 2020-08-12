import { registerNewUser, logInUser, googleSignIn, watchMen, uploadInfo, uploadProfilePhoto, downloadProfilePhoto, close} from './firebase.js'

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
//salir
export const closesession = () => {
  watchMen();
  close();
  watchMen();
}
  
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

export const disabledButton = () => {
  for (let i = 1; i < 16; i++) {
    document.querySelector('#btnCreateProfile' + i + '').disabled = true;
  }
  document.querySelector('#btnCreateProfile11').disabled = false;
}

// first question 
export const createProfileBegin = () => {
  if (document.querySelector('#nameDog').value !== '') {
    document.querySelector('#btnCreateProfile1').disabled = false;
    document.querySelector('#btnCreateProfile1').classList.remove('hideButton');
    document.querySelector('#btnCreateProfile1').classList.add('btnContinue');
  } else {
    document.querySelector('#btnCreateProfile1').disabled = true;
    document.querySelector('#btnCreateProfile1').classList.add('hideButton');
    document.querySelector('#btnCreateProfile1').classList.remove('btnContinue');
  }
}

// question 1 to question 2
export const createProfileNext1 = () => {
  document.querySelector('#nameDogQuestion').classList.add('hide');
  document.querySelector('#sexDogQuestion').classList.remove('hide');
  document.querySelector('#sexDog').addEventListener('change', () => {
    if (document.querySelector('#sexDog').value !== 'default') {
      document.querySelector('#btnCreateProfile2').disabled = false;
      document.querySelector('#btnCreateProfile2').classList.remove('hideButton');
      document.querySelector('#btnCreateProfile2').classList.add('btnContinue');
    } else {
      document.querySelector('#btnCreateProfile2').disabled = true;
      document.querySelector('#btnCreateProfile2').classList.add('hideButton');
      document.querySelector('#btnCreateProfile2').classList.remove('btnContinue');
    }
  })
};

// question 2 to question 3
export const createProfileNext2 = () => {
  document.querySelector('#sexDogQuestion').classList.add('hide');
  document.querySelector('#photoDogQuestion').classList.remove('hide');
  if (document.querySelector('#uploader').value !== null) {
    document.querySelector('#btnCreateProfile3').disabled = false;
    document.querySelector('#btnCreateProfile3').classList.remove('hideButton');
    document.querySelector('#btnCreateProfile3').classList.add('btnContinue');
  } else {
    document.querySelector('#btnCreateProfile3').disabled = true;
    document.querySelector('#btnCreateProfile3').classList.add('hideButton');
    document.querySelector('#btnCreateProfile3').classList.remove('btnContinue');
  }
};


// question 3 to question 4
export const createProfileNext3 = () => {
  document.querySelector('#photoDogQuestion').classList.add('hide');
  document.querySelector('#ageDogQuestion').classList.remove('hide');
  document.querySelector('#ageDog').addEventListener('keyup', () => {
    if (document.querySelector('#ageDog').value !== '') {
      document.querySelector('#btnCreateProfile4').disabled = false;
      document.querySelector('#btnCreateProfile4').classList.remove('hideButton');
      document.querySelector('#btnCreateProfile4').classList.add('btnContinue');
    }
    else {
      document.querySelector('#btnCreateProfile4').disabled = true;
      document.querySelector('#btnCreateProfile4').classList.add('hideButton');
      document.querySelector('#btnCreateProfile4').classList.remove('btnContinue');
    }
  })
};

// question 4 to question 5
export const createProfileNext4 = () => {
  document.querySelector('#ageDogQuestion').classList.add('hide');
  document.querySelector('#locationDogQuestion').classList.remove('hide');
  document.querySelector('#locationDog').addEventListener('change', () => {
    if (document.querySelector('#locationDog').value !== 'default') {
      document.querySelector('#btnCreateProfile5').disabled = false;
      document.querySelector('#btnCreateProfile5').classList.remove('hideButton');
      document.querySelector('#btnCreateProfile5').classList.add('btnContinue');
    }
    else {
      document.querySelector('#btnCreateProfile5').disabled = true;
      document.querySelector('#btnCreateProfile5').classList.add('hideButton');
      document.querySelector('#btnCreateProfile5').classList.remove('btnContinue');
    }
  })
};

// question 5 to question 6
export const createProfileNext5 = () => {
  document.querySelector('#locationDogQuestion').classList.add('hide');
  document.querySelector('#placesDogQuestion').classList.remove('hide');
  document.querySelector('#placeDog1').addEventListener('keyup', () => {
    if (document.querySelector('#placeDog1').value !== '') {
      document.querySelector('#btnCreateProfile6').disabled = false;
      document.querySelector('#btnCreateProfile6').classList.remove('hideButton');
      document.querySelector('#btnCreateProfile6').classList.add('btnContinue');
    }
    else {
      document.querySelector('#btnCreateProfile6').disabled = true;
      document.querySelector('#btnCreateProfile6').classList.add('hideButton');
      document.querySelector('#btnCreateProfile6').classList.remove('btnContinue');
    }
  })
};

// question 6 to question 7
export const createProfileNext6 = () => {
  document.querySelector('#placesDogQuestion').classList.add('hide');
  document.querySelector('#sizeDogQuestion').classList.remove('hide');
  document.querySelector('#sizeDog').addEventListener('change', () => {
    if (document.querySelector('#sizeDog').value !== 'default') {
      document.querySelector('#btnCreateProfile7').disabled = false;
      document.querySelector('#btnCreateProfile7').classList.remove('hideButton');
      document.querySelector('#btnCreateProfile7').classList.add('btnContinue');
    }
    else {
      document.querySelector('#btnCreateProfile7').disabled = true;
      document.querySelector('#btnCreateProfile7').classList.add('hideButton');
      document.querySelector('#btnCreateProfile7').classList.remove('btnContinue');
    }
  })
};

// question 7 to question 8
export const createProfileNext7 = () => {
  document.querySelector('#sizeDogQuestion').classList.add('hide');
  document.querySelector('#personalityDogQuestion').classList.remove('hide');
  for (let i = 0; i < 7; i++) {
    document.querySelectorAll('input[name=personality]')[i].addEventListener('change', () => {
      if (document.querySelectorAll('input[name=personality]:checked').length !== 0) {
        document.querySelector('#btnCreateProfile8').disabled = false;
        document.querySelector('#btnCreateProfile8').classList.remove('hideButton');
        document.querySelector('#btnCreateProfile8').classList.add('btnContinue');
      }
      else {
        document.querySelector('#btnCreateProfile8').disabled = true;
        document.querySelector('#btnCreateProfile8').classList.add('hideButton');
        document.querySelector('#btnCreateProfile8').classList.remove('btnContinue');
      }
    })
  }
};

// question 8 to question 9
export const createProfileNext8 = () => {
  document.querySelector('#personalityDogQuestion').classList.add('hide');
  document.querySelector('#scheduleDogQuestion').classList.remove('hide');
  for (let i = 0; i < 3; i++) {
    document.querySelectorAll('input[name=schedule]')[i].addEventListener('change', () => {
      if (document.querySelectorAll('input[name=schedule]:checked').length !== 0) {
        document.querySelector('#btnCreateProfile9').disabled = false;
        document.querySelector('#btnCreateProfile9').classList.remove('hideButton');
        document.querySelector('#btnCreateProfile9').classList.add('btnContinue');
      }
      else {
        document.querySelector('#btnCreateProfile9').disabled = true;
        document.querySelector('#btnCreateProfile9').classList.add('hideButton');
        document.querySelector('#btnCreateProfile9').classList.remove('btnContinue');
      }
    })
  }
};

// question 9 to question 10
export const createProfileNext9 = () => {
  document.querySelector('#scheduleDogQuestion').classList.add('hide');
  document.querySelector('#biographyDogQuestion').classList.remove('hide');
  document.querySelector('#biographyDog').addEventListener('keyup', () => {
    if (document.querySelector('#biographyDog').value !== '') {
      document.querySelector('#btnCreateProfile10').disabled = false;
      document.querySelector('#btnCreateProfile10').classList.remove('hideButton');
      document.querySelector('#btnCreateProfile10').classList.add('btnContinue');
    } else {
      document.querySelector('#btnCreateProfile10').disabled = true;
      document.querySelector('#btnCreateProfile10').classList.add('hideButton');
      document.querySelector('#btnCreateProfile10').classList.remove('btnContinue');
    }
  })
};

// question 10 to question OTHER DOG
export const createProfileNext10 = () => {
  document.querySelector('#biographyDogQuestion').classList.add('hide');
  document.querySelector('#screenOtherDogQuestion').classList.remove('hide');
}

// question OTHER DOG to question 12
export const createProfileNext11 = () => {
  document.querySelector('#screenOtherDogQuestion').classList.add('hide');
  document.querySelector('#sexPreferencesDogQuestion').classList.remove('hide');
  for (let i = 0; i < 2; i++) {
    document.querySelectorAll('input[name=sexPreference]')[i].addEventListener('change', () => {
      if (document.querySelectorAll('input[name=sexPreference]:checked').length !== 0) {
        document.querySelector('#btnCreateProfile12').disabled = false;
        document.querySelector('#btnCreateProfile12').classList.remove('hideButton');
        document.querySelector('#btnCreateProfile12').classList.add('btnContinue');
      }
      else {
        document.querySelector('#btnCreateProfile12').disabled = true;
        document.querySelector('#btnCreateProfile12').classList.add('hideButton');
        document.querySelector('#btnCreateProfile12').classList.remove('btnContinue');
      }
    })
  }
};

// question 12 to question 13
export const createProfileNext12 = () => {
  document.querySelector('#sexPreferencesDogQuestion').classList.add('hide');
  document.querySelector('#sizePreferencesDogQuestion').classList.remove('hide');
  for (let i = 0; i < 3; i++) {
    document.querySelectorAll('input[name=sizePreference]')[i].addEventListener('change', () => {
      if (document.querySelectorAll('input[name=sizePreference]:checked').length !== 0) {
        document.querySelector('#btnCreateProfile13').disabled = false;
        document.querySelector('#btnCreateProfile13').classList.remove('hideButton');
        document.querySelector('#btnCreateProfile13').classList.add('btnContinue');
      }
      else {
        document.querySelector('#btnCreateProfile13').disabled = true;
        document.querySelector('#btnCreateProfile13').classList.add('hideButton');
        document.querySelector('#btnCreateProfile13').classList.remove('btnContinue');
      }
    })
  }
};

// question 13 to question 14
export const createProfileNext13 = () => {
  document.querySelector('#sizePreferencesDogQuestion').classList.add('hide');
  document.querySelector('#personalityPreferencesDogQuestion').classList.remove('hide');
  for (let i = 0; i < 7; i++) {
    document.querySelectorAll('input[name=personalityPreference]')[i].addEventListener('change', () => {
      if (document.querySelectorAll('input[name=personalityPreference]:checked').length !== 0) {
        document.querySelector('#btnCreateProfile14').disabled = false;
        document.querySelector('#btnCreateProfile14').classList.remove('hideButton');
        document.querySelector('#btnCreateProfile14').classList.add('btnContinue');
      }
      else {
        document.querySelector('#btnCreateProfile2').disabled = true;
        document.querySelector('#btnCreateProfile14').classList.add('hideButton');
        document.querySelector('#btnCreateProfile14').classList.remove('btnContinue');
      }
    })
  }
};

// question 14 to question 15
export const createProfileNext14 = () => {
  document.querySelector('#personalityPreferencesDogQuestion').classList.add('hide');
  document.querySelector('#schedulePreferencesDogQuestion').classList.remove('hide');
  for (let i = 0; i < 3; i++) {
    document.querySelectorAll('input[name=schedulePreference]')[i].addEventListener('change', () => {
      if (document.querySelectorAll('input[name=schedulePreference]:checked').length !== 0) {
        document.querySelector('#btnCreateProfile15').disabled = false;
        document.querySelector('#btnCreateProfile15').classList.remove('hideButton');
        document.querySelector('#btnCreateProfile15').classList.add('btnContinue');
      }
      else {
        document.querySelector('#btnCreateProfile15').disabled = true;
        document.querySelector('#btnCreateProfile15').classList.add('hideButton');
        document.querySelector('#btnCreateProfile15').classList.remove('btnContinue');
      }
    })
  }
};

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




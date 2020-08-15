/* eslint-disable no-plusplus */
// CREATE PROFILE
export const disabledButton = () => {
  for (let i = 1; i < 16; i++) {
    document.querySelector(`#btnCreateProfile${i}`).disabled = true;
  }
  document.querySelector('#btnCreateProfile11').disabled = false;
};

export const closeCreateProfile = () => {
  document.querySelector('#closeCreateProfile').addEventListener('click', () => {
    window.location.hash = '#/Home1';
  });
};

// first question
export const createProfileBegin = () => {
  document.querySelector('#nameDogQuestion').classList.remove('hide');
  document.querySelector('#nameDog').addEventListener('keyup', () => {
    if (document.querySelector('#nameDog').value !== '') {
      document.querySelector('#btnCreateProfile1').disabled = false;
      document.querySelector('#btnCreateProfile1').classList.remove('hideButton');
      document.querySelector('#btnCreateProfile1').classList.add('btnContinue');
    } else {
      document.querySelector('#btnCreateProfile1').disabled = true;
      document.querySelector('#btnCreateProfile1').classList.add('hideButton');
      document.querySelector('#btnCreateProfile1').classList.remove('btnContinue');
    }
  });
};

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
  });
  document.querySelector('#back').addEventListener('click', () => {
    createProfileBegin();
    document.querySelector('#sexDogQuestion').classList.add('hide');
  });
};

// question 2 to question 3
export const createProfileNext2 = () => {
  document.querySelector('#sexDogQuestion').classList.add('hide');
  document.querySelector('#photoDogQuestion').classList.remove('hide');
  document.querySelector('#photoDog').addEventListener('change', () => {
    if (document.querySelector('#photoDog') !== null) {
      document.querySelector('#btnCreateProfile3').disabled = false;
      document.querySelector('#btnCreateProfile3').classList.remove('hideButton');
      document.querySelector('#btnCreateProfile3').classList.add('btnContinue');
    } else {
      document.querySelector('#btnCreateProfile3').disabled = true;
      document.querySelector('#btnCreateProfile3').classList.add('hideButton');
      document.querySelector('#btnCreateProfile3').classList.remove('btnContinue');
    }
  });
  document.querySelector('#back').addEventListener('click', () => {
    createProfileNext1();
    document.querySelector('#photoDogQuestion').classList.add('hide');
  });
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
    } else {
      document.querySelector('#btnCreateProfile4').disabled = true;
      document.querySelector('#btnCreateProfile4').classList.add('hideButton');
      document.querySelector('#btnCreateProfile4').classList.remove('btnContinue');
    }
  });
  document.querySelector('#back').addEventListener('click', () => {
    createProfileNext2();
    document.querySelector('#ageDogQuestion').classList.add('hide');
  });
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
    } else {
      document.querySelector('#btnCreateProfile5').disabled = true;
      document.querySelector('#btnCreateProfile5').classList.add('hideButton');
      document.querySelector('#btnCreateProfile5').classList.remove('btnContinue');
    }
  });
  document.querySelector('#back').addEventListener('click', () => {
    createProfileNext3();
    document.querySelector('#locationDogQuestion').classList.add('hide');
  });
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
    } else {
      document.querySelector('#btnCreateProfile6').disabled = true;
      document.querySelector('#btnCreateProfile6').classList.add('hideButton');
      document.querySelector('#btnCreateProfile6').classList.remove('btnContinue');
    }
  });
  document.querySelector('#back').addEventListener('click', () => {
    createProfileNext4();
    document.querySelector('#placesDogQuestion').classList.add('hide');
  });
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
    } else {
      document.querySelector('#btnCreateProfile7').disabled = true;
      document.querySelector('#btnCreateProfile7').classList.add('hideButton');
      document.querySelector('#btnCreateProfile7').classList.remove('btnContinue');
    }
  });
  document.querySelector('#back').addEventListener('click', () => {
    createProfileNext5();
    document.querySelector('#sizeDogQuestion').classList.add('hide');
  });
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
      } else {
        document.querySelector('#btnCreateProfile8').disabled = true;
        document.querySelector('#btnCreateProfile8').classList.add('hideButton');
        document.querySelector('#btnCreateProfile8').classList.remove('btnContinue');
      }
    });
  }
  document.querySelector('#back').addEventListener('click', () => {
    createProfileNext6();
    document.querySelector('#personalityDogQuestion').classList.add('hide');
  });
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
      } else {
        document.querySelector('#btnCreateProfile9').disabled = true;
        document.querySelector('#btnCreateProfile9').classList.add('hideButton');
        document.querySelector('#btnCreateProfile9').classList.remove('btnContinue');
      }
    });
  }
  document.querySelector('#back').addEventListener('click', () => {
    createProfileNext7();
    document.querySelector('#scheduleDogQuestion').classList.add('hide');
  });
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
  });
  document.querySelector('#back').addEventListener('click', () => {
    createProfileNext8();
    document.querySelector('#biographyDogQuestion').classList.add('hide');
  });
};

// question 10 to question OTHER DOG
export const createProfileNext10 = () => {
  document.querySelector('#biographyDogQuestion').classList.add('hide');
  document.querySelector('#screenOtherDogQuestion').classList.remove('hide');
  document.querySelector('#back').addEventListener('click', () => {
    createProfileNext9();
    document.querySelector('#screenOtherDogQuestion').classList.add('hide');
  });
};

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
      } else {
        document.querySelector('#btnCreateProfile12').disabled = true;
        document.querySelector('#btnCreateProfile12').classList.add('hideButton');
        document.querySelector('#btnCreateProfile12').classList.remove('btnContinue');
      }
    });
  }
  document.querySelector('#back').addEventListener('click', () => {
    createProfileNext10();
    document.querySelector('#sexPreferencesDogQuestion').classList.add('hide');
  });
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
      } else {
        document.querySelector('#btnCreateProfile13').disabled = true;
        document.querySelector('#btnCreateProfile13').classList.add('hideButton');
        document.querySelector('#btnCreateProfile13').classList.remove('btnContinue');
      }
    });
  }
  document.querySelector('#back').addEventListener('click', () => {
    createProfileNext11();
    document.querySelector('#sizePreferencesDogQuestion').classList.add('hide');
  });
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
      } else {
        document.querySelector('#btnCreateProfile2').disabled = true;
        document.querySelector('#btnCreateProfile14').classList.add('hideButton');
        document.querySelector('#btnCreateProfile14').classList.remove('btnContinue');
      }
    });
  }
  document.querySelector('#back').addEventListener('click', () => {
    createProfileNext12();
    document.querySelector('#personalityPreferencesDogQuestion').classList.add('hide');
  });
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
      } else {
        document.querySelector('#btnCreateProfile15').disabled = true;
        document.querySelector('#btnCreateProfile15').classList.add('hideButton');
        document.querySelector('#btnCreateProfile15').classList.remove('btnContinue');
      }
    });
  }
  document.querySelector('#back').addEventListener('click', () => {
    createProfileNext13();
    document.querySelector('#schedulePreferencesDogQuestion').classList.add('hide');
  });
};

// question 15 to FINAL SCREEN
export const createProfileNext15 = () => {
  document.querySelector('#schedulePreferencesDogQuestion').classList.add('hide');
  document.querySelector('#finishPreferencesDogQuestion').classList.remove('hide');
  document.querySelector('#back').addEventListener('click', () => {
    createProfileNext14();
    document.querySelector('#finishPreferencesDogQuestion').classList.add('hide');
  });
};

export const createProfileNext = [createProfileNext1, createProfileNext2,
  createProfileNext3, createProfileNext4, createProfileNext5,
  createProfileNext6, createProfileNext7, createProfileNext8,
  createProfileNext9, createProfileNext10, createProfileNext11,
  createProfileNext12, createProfileNext13, createProfileNext14, createProfileNext15];

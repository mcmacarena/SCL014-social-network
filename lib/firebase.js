export const registerNewUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
          console.log('Verification email sent');
        })
        .catch((error) => {
          console.log('no se mando el correo');
        }),
    )
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
};


export const logInUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((data) => {
      sessionStorage.setItem('userBarkify', JSON.stringify({
        name: data.user.displayName,
        email: data.user.email,
        uid: data.user.uid,
      })
      );
      window.location.hash = '#/Home';
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorCode = error.code;
      let errorMessageShow = '';
      if (errorCode === 'auth/invalid-email') {
        errorMessageShow = 'Asegurate de ingresar un Correo Electrónico válido.';
      }
      if (errorCode === 'auth/wrong-password') {
        errorMessageShow = 'Asegurate de ingresar una contraseña correcta.';
      }
      if (errorCode === 'auth/user-disabled') {
        errorMessageShow = 'Tu acceso a Barkify ha sido bloqueado.';
      }

      // if (errorCode === 'There is no user record corresponding to this identifier. The user may have been deleted.') {
      //   errorMessageShow = 'No hay ningún registro de usuario que corresponda a este identificador. Es posible que se haya eliminado al usuario.';
      // }
      // if (error === 'The password is invalid or the user does not have a password.') {
      //   errorMessageShow = 'La contraseña no es válida o el usuario no tiene una contraseña.';
      // }
      // if (errorMessage === 'The user account has been disabled by an administrator.') {
      //   errorMessageShow = 'La cuenta de usuario ha sido deshabilitada por un administrador.';
      // }
      // The email address is badly formatted.
      // La dirección de correo electrónico tiene un formato incorrecto.
      // No hay ningún registro de usuario que corresponda a este identificador. Es posible que se haya eliminado al usuario
      // La contraseña no es válida o el usuario no tiene una contraseña
      // The user account has been disabled by an administrator.
      // La cuenta de usuario ha sido deshabilitada por un administrador.
      document.getElementById('errormensaje').innerText = errorMessageShow;
    });
};


export const watchMen = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      const email = user.email;
      const emailVerified = user.emailVerified;
      const uid = user.uid;

      return uid;

    } else {
      // User is signed out.
      // ...
    }

  });
};

export const googleSignIn = (provider) => {
  firebase.auth().signInWithPopup(provider)
    .then((googleUser) => {

      const user = googleUser.user;
      sessionStorage.setItem('userBarkify', JSON.stringify({
        name: user.displayName,
        email: user.email,
        uid: user.uid,
      }));
      window.location.hash = '#/Home';

    })
    .catch((error) => {
      console.log('error en loguearse con google');
      let errorGoogle = error.message;
      if (errorGoogle === 'This operation has been cancelled due to another conflicting popup being opened.') {
        errorGoogle = 'Esta operación se canceló debido a que se abrió otra ventana emergente en conflicto.';
      } 
      if (errorGoogle === 'The popup has been closed by the user before finalizing the operation.') {
        errorGoogle = 'La ventana emergente ha sido cerrada por el usuario antes de finalizar la operación.';
      }
      // This operation has been cancelled due to another conflicting popup being opened.
      // Esta operación se canceló debido a que se abrió otra ventana emergente en conflicto.
      // The popup  has been closed by the user before finalizing the operation
      // La ventana emergente ha sido cerrada por el usuario antes de finalizar la operación.

      document.getElementById('errogoogle').innerText = errorGoogle;
    });
};

const db = firebase.firestore();

export const uploadInfo = (nameDog, sexDog, ageDog, locationDog, placeDog1, placeDog2, placeDog3, sizeDog, biographyDog, personalityDog1, personalityDog2,
  personalityDog3, personalityDog4, personalityDog5, personalityDog6, personalityDog7, scheduleDog1, scheduleDog2, scheduleDog3, sexDogPreference1,
  sexDogPreference2, sizeDogPreference1, sizeDogPreference2, sizeDogPreference3, personalityDogPreference1, personalityDogPreference2, personalityDogPreference3,
  personalityDogPreference4, personalityDogPreference5, personalityDogPreference6, personalityDogPreference7, scheduleDogPreference1, scheduleDogPreference2,
  scheduleDogPreference3) => {
  db.collection("doggys").add({
    uid: JSON.parse(sessionStorage.userBarkify).uid,
    nameDog: nameDog,
    sexDog: sexDog,
    ageDog: ageDog,
    personalityDog: {
      personalityDog1: personalityDog1,
      personalityDog2: personalityDog2,
      personalityDog3: personalityDog3,
      personalityDog4: personalityDog4,
      personalityDog5: personalityDog5,
      personalityDog6: personalityDog6,
      personalityDog7: personalityDog7,
    },
    locationDog: locationDog,
    scheduleDog: {
      scheduleDog1: scheduleDog1,
      scheduleDog2: scheduleDog2,
      scheduleDog3: scheduleDog3,
    },
    placeDog: {
      placeDog1: placeDog1,
      placeDog2: placeDog2,
      placeDog3: placeDog3,
    },
    sizeDog: sizeDog,
    biographyDog: biographyDog,
    sexDogPreference: {
      sexDogPreference1: sexDogPreference1,
      sexDogPreference2: sexDogPreference2,
    },
    sizeDogPreference: {
      sizeDogPreference1: sizeDogPreference1,
      sizeDogPreference2: sizeDogPreference2,
      sizeDogPreference3: sizeDogPreference3,
    },
    personalityDogPreference: {
      personalityDogPreference1: personalityDogPreference1,
      personalityDogPreference2: personalityDogPreference2,
      personalityDogPreference3: personalityDogPreference3,
      personalityDogPreference4: personalityDogPreference4,
      personalityDogPreference5: personalityDogPreference5,
      personalityDogPreference6: personalityDogPreference6,
      personalityDogPreference7: personalityDogPreference7,
    },
    scheduleDogPreference: {
      scheduleDogPreference1: scheduleDogPreference1,
      scheduleDogPreference2: scheduleDogPreference2,
      scheduleDogPreference3: scheduleDogPreference3,
    }
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      let idPhoto = docRef.id;
      accessData(idPhoto);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// subir fotos
export const uploadProfilePhoto = (photoDog) => {
  const storageRef = firebase.storage().ref('photo-dog/' + JSON.parse(sessionStorage.userBarkify).uid);
  const task = storageRef.put(photoDog);
  task.on('state_changed',
    function progress(snapshot) {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      document.querySelector('#uploader').value = percentage;
    },
    function error() {
      console.log('no se subio tu foto')
    },
    function complete() {
      console.log('se subio tu foto')
    });
}

export const downloadProfilePhoto = () => {
  const storageRef = firebase.storage().ref('photo-dog/' + JSON.parse(sessionStorage.userBarkify).uid);
  storageRef.getDownloadURL()
    .then(function (url) {
      console.log('estoy trayendome la imagen')
      const img = document.querySelector('#myProfilePic');
      img.src = url;
    })
    .catch(function (error) {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break;

        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });
}

export const accessData = ( ) => {
  db.collection('doggys').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().uid === JSON.parse(sessionStorage.userBarkify).uid) {
        document.querySelector('#nameDogCloud').innerHTML = doc.data().nameDog;
        document.querySelector('#ageDogCloud').innerHTML = doc.data().ageDog;
        document.querySelector('#sexDogCloud').innerHTML = doc.data().sexDog;
        document.querySelector('#sizeDogCloud').innerHTML = doc.data().sizeDog;
        document.querySelector('#biographyDogCloud').innerHTML = doc.data().biographyDog;
        document.querySelector('#personalityDogCloud1').innerHTML = doc.data().personalityDog.personalityDog1;
        document.querySelector('#personalityDogCloud2').innerHTML = doc.data().personalityDog.personalityDog2;
        document.querySelector('#personalityDogCloud3').innerHTML = doc.data().personalityDog.personalityDog3;
        document.querySelector('#personalityDogCloud4').innerHTML = doc.data().personalityDog.personalityDog4;
        document.querySelector('#personalityDogCloud5').innerHTML = doc.data().personalityDog.personalityDog5;
        document.querySelector('#personalityDogCloud6').innerHTML = doc.data().personalityDog.personalityDog6;
        document.querySelector('#personalityDogCloud7').innerHTML = doc.data().personalityDog.personalityDog7;
        document.querySelector('#scheduleDogCloud1').innerHTML = doc.data().scheduleDog.scheduleDog1;
        document.querySelector('#scheduleDogCloud2').innerHTML = doc.data().scheduleDog.scheduleDog2;
        document.querySelector('#scheduleDogCloud3').innerHTML = doc.data().scheduleDog.scheduleDog3;
        document.querySelector('#placeDogCloud1').innerHTML = doc.data().placeDog.placeDog1;
        document.querySelector('#placeDogCloud2').innerHTML = doc.data().placeDog.placeDog2;
        document.querySelector('#placeDogCloud3').innerHTML = doc.data().placeDog.placeDog3;
      }
    });
  });
};

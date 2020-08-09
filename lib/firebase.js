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
    .then(() => {
      console.log('te logeaste');
      window.location.hash = '#/Home';

      // history.pushState
    })
    .catch((error) => {
      console.log('error en loguearse');
      // const errorCode = error.code;
      let errorMessage = error.message;

      if (errorMessage === 'The email address is badly formatted.') {
        errorMessage = 'La dirección de correo electrónico tiene un formato incorrecto.';
      }
      if (errorMessage === 'There is no user record corresponding to this identifier. The user may have been deleted.') {
        errorMessage = 'No hay ningún registro de usuario que corresponda a este identificador. Es posible que se haya eliminado al usuario.';
      }
      if (errorMessage === 'The password is invalid or the user does not have a password.') {
        errorMessage = 'La contraseña no es válida o el usuario no tiene una contraseña.';
      }
      if (errorMessage === 'The user account has been disabled by an administrator.') {
        errorMessage = 'La cuenta de usuario ha sido deshabilitada por un administrador.';
      }
      // The email address is badly formatted.
      // La dirección de correo electrónico tiene un formato incorrecto.
      // No hay ningún registro de usuario que corresponda a este identificador. Es posible que se haya eliminado al usuario
      // La contraseña no es válida o el usuario no tiene una contraseña
      // The user account has been disabled by an administrator.
      // La cuenta de usuario ha sido deshabilitada por un administrador.
      document.getElementById('erromensaje').innerText = errorMessage;
    });
};


export const watchMen = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
};

export const googleSignIn = (provider) => {
  firebase.auth().signInWithPopup(provider)
    .then(() => {
      window.location.hash = '#/Home';

      // ...
    }).catch((error) => {
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

export const uploadInfo = (nameDog, sexDog, ageDog, locationDog, placeDog1, placeDog2, placeDog3, sizeDog, biographyDog, sexPreferenceDog) => {
  db.collection('doggys').add({
    nameDog,
    sexDog,
    ageDog,
    locationDog,
    placeDog1,
    placeDog2,
    placeDog3,
    sizeDog,
    biographyDog,
    sexPreferenceDog,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// ola maca ola solcito

export const accessData = () => {
  db.collection('doggys').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().nameDog}`);
      document.querySelector('#nameDogCloud').innerHTML = doc.data().nameDog;
      document.querySelector('#ageDogCloud').innerHTML = doc.data().ageDog;
      document.querySelector('#sexDogCloud').innerHTML = doc.data().sexDog;
      document.querySelector('#sizeDogCloud').innerHTML = doc.data().sizeDog;
      document.querySelector('#biographyDogCloud').innerHTML = doc.data().biographyDog;
    });
  });
};

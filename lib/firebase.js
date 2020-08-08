export const registerNewUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      firebase.auth().currentUser.sendEmailVerification()
        .then(function () {
          console.log('Verification email sent')
        })
        .catch(function (error) {
          console.log('no se mando el correo')
        }))
    .catch(function (error) {
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
    .then(function () {
      console.log('te logeaste');
      window.location.hash = '#/Home';

      // history.pushState
    })
    .catch(function (error) {
      console.log('error en loguearse');
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
};




export const watchMen = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
};

export const googleSignIn = (provider) => {
  firebase.auth().signInWithPopup(provider)
    .then(function () {
      window.location.hash = '#/Home';
      ;
      // ...
    }).catch(function (error) {
      console.log('error en loguearse con google')

    });
};

const db = firebase.firestore();

export const uploadInfo = (nameDog, sexDog, ageDog, locationDog, placeDog1, placeDog2, placeDog3, sizeDog, biographyDog, sexPreferenceDog) => {
  db.collection("doggys").add({
    nameDog: nameDog,
    sexDog: sexDog,
    ageDog: ageDog,
    locationDog: locationDog,
    placeDog1: placeDog1,
    placeDog2: placeDog2,
    placeDog3: placeDog3,
    sizeDog: sizeDog,
    biographyDog: biographyDog,
    sexPreferenceDog: sexPreferenceDog
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });

  db.collection("doggys").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });
}
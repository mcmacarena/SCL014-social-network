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
      // verCositas();
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...


  //     const db = firebase.firestore()


  //   db.collection("users").add({
  //   first: "Ada",
  //   last: "Lovelace",
  //   born: 1815
  // })
  //   .then(function (docRef) {
  //     console.log("Document written with ID: ", docRef.id);
  //   })
  //   .catch(function (error) {
  //     console.error("Error adding document: ", error);
  //   });

    } else {
      // User is signed out.
      // ...
      console.log('sefue');
    }
  });
};

export const googleSignIn = (provider) => {
  firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      window.location.hash = '#/Home';
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function (error) {
      console.log('error en loguearse con google')
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};




// db.collection("users").add({
//   first: "Alan",
//   middle: "Mathison",
//   last: "Turing",
//   born: 1912
// })
//   .then(function (docRef) {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function (error) {
//     console.error("Error adding document: ", error);
//   });

// db.collection("users").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   });
// });
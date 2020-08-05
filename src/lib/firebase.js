export const registerNewUser = (email, password) => {
  const actionCodeSettings = {
    url : 'https://www.example.com/cart?email=user@example.com&cartId=123' ,
    iOS : {
      bundleId : 'com.example.ios'
    },
    android : {
      packageName : 'com.example.android' ,
      installApp : true ,
      minimumVersion : '12'
    },
    handleCodeInApp : true
  };
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(firebase.auth().currentUser.sendEmailVerification()
    .then( function ()  {
      // Verification email sent.
    })
    .catch( function ( error )  {
      // Error occurred. Inspect error.code.
    }) )
    .catch (function (error) {
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
    .catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
};

export const googleSignIn = (provider) => {
  firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function (error) {
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


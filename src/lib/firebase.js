

export const registerNewUser = () => {

    const email = document.querySelector('#newUserEmail').value;
    const password = document.querySelector('#newUserPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });

};

export const logInUser = () => {

    const email = document.querySelector('#userEmail').value;
    const password = document.querySelector('#userPassword').value;
    console.log('iniciaste')

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
};

 

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

export const uploadInfo = (nameDog, sexDog, ageDog, locationDog, placeDog1, placeDog2, placeDog3, sizeDog, biographyDog, personalityDog1, personalityDog2,
  personalityDog3, personalityDog4, personalityDog5, personalityDog6, personalityDog7, scheduleDog1, scheduleDog2, scheduleDog3, sexDogPreference1,
  sexDogPreference2, sizeDogPreference1, sizeDogPreference2, sizeDogPreference3, personalityDogPreference1, personalityDogPreference2, personalityDogPreference3,
  personalityDogPreference4, personalityDogPreference5, personalityDogPreference6, personalityDogPreference7, scheduleDogPreference1, scheduleDogPreference2,
  scheduleDogPreference3) => {
  db.collection("doggys").add({
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
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

// ola maca ola solcito

export const accessData = () => {
  db.collection("doggys").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().nameDog}`);
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
    });
  });
};

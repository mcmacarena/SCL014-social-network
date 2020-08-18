/* eslint-disable max-len */
/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
// registrar nuevo usuario
export const registerNewUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
          console.log('El correo fue enviado');
        })
        .catch((error) => {
          console.log(`no se mando el correo error: ${error.message}`);
        }),
    )
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        // alert('El password es muy débil. Prueba otra vez con uno más largo');
      } else {
        // alert(errorMessage);
      }
    });
};
const db = firebase.firestore();

// log in
export const logInUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((data) => {
      const user = data.user;
      sessionStorage.setItem('userBarkify', JSON.stringify({
        name: user.displayName,
        email: user.email,
        uid: user.uid,
      }));
      db.collection('doggys').get().then((querySnapshot) => {
        let userExist = '';
        querySnapshot.forEach((doc) => {
          if (doc.data().uid === JSON.parse(sessionStorage.userBarkify).uid) userExist = 'yes'
        });
        if (userExist === 'yes') window.location.hash = '#/Home';
        else window.location.hash = '#/myProfileEmpty';
      });
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

      document.getElementById('errormensaje').innerText = errorMessageShow;
    });
};

// google log in
export const googleSignIn = (provider) => {
  firebase.auth().signInWithPopup(provider)
    .then((googleUser) => {
      const user = googleUser.user;
      sessionStorage.setItem('userBarkify', JSON.stringify({
        name: user.displayName,
        email: user.email,
        uid: user.uid,
      }));
      db.collection('doggys').get().then((querySnapshot) => {
        let userExist = '';
        querySnapshot.forEach((doc) => {
          if (doc.data().uid === JSON.parse(sessionStorage.userBarkify).uid) userExist = 'yes'
        });
        if (userExist === 'yes') window.location.hash = '#/Home';
        else window.location.hash = '#/myProfileEmpty';
      });
    })
    .catch((error) => {
      console.log('error en loguearse con google');
      let errorGoogle = error.message;
      if (errorGoogle === 'This operation has been cancelled due to another conflicting popup being opened.') {
        errorGoogle = 'Se canceló la operación debido a que hay una ventana emergente ya abierta.';
      }
      if (errorGoogle === 'The popup has been closed by the user before finalizing the operation.') {
        errorGoogle = 'La ventana emergente fue cerrada antes de finalizar la operación';
      }
      document.getElementById('errogoogle').innerText = errorGoogle;
    });
};

export const close = () => {
  sessionStorage.removeItem('userBarkify');
  firebase.auth().signOut()
    .then(() => {
      console.log('Cerro sesión');
    })
    .catch((error) => {
      console.log(error);
    });
};

// subir información luego de la creación del perfil del perro
export const uploadInfo = (nameDog, sexDog, ageDog, locationDog, placeDog1, placeDog2, placeDog3, sizeDog, biographyDog, personalityDog1, personalityDog2,
  personalityDog3, personalityDog4, personalityDog5, personalityDog6, personalityDog7, scheduleDog1, scheduleDog2, scheduleDog3, sexDogPreference1,
  sexDogPreference2, sizeDogPreference1, sizeDogPreference2, sizeDogPreference3, personalityDogPreference1, personalityDogPreference2, personalityDogPreference3,
  personalityDogPreference4, personalityDogPreference5, personalityDogPreference6, personalityDogPreference7, scheduleDogPreference1, scheduleDogPreference2,
  scheduleDogPreference3) => {
  db.collection('doggys').doc(JSON.parse(sessionStorage.userBarkify).uid).set({
    uid: JSON.parse(sessionStorage.userBarkify).uid,
    like: 0,
    likedDog: [],
    commentDog: [],
    nameDog,
    sexDog,
    ageDog,
    personalityDog: {
      personalityDog1,
      personalityDog2,
      personalityDog3,
      personalityDog4,
      personalityDog5,
      personalityDog6,
      personalityDog7,
    },
    locationDog,
    scheduleDog: {
      scheduleDog1,
      scheduleDog2,
      scheduleDog3,
    },
    placeDog: {
      placeDog1,
      placeDog2,
      placeDog3,
    },
    sizeDog,
    biographyDog,
    sexDogPreference: {
      sexDogPreference1,
      sexDogPreference2,
    },
    sizeDogPreference: {
      sizeDogPreference1,
      sizeDogPreference2,
      sizeDogPreference3,
    },
    personalityDogPreference: {
      personalityDogPreference1,
      personalityDogPreference2,
      personalityDogPreference3,
      personalityDogPreference4,
      personalityDogPreference5,
      personalityDogPreference6,
      personalityDogPreference7,
    },
    scheduleDogPreference: {
      scheduleDogPreference1,
      scheduleDogPreference2,
      scheduleDogPreference3,
    },
  })
    .then(() => {

    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// subir fotos
export const uploadProfilePhoto = (photoDog) => {
  const storageRef = firebase.storage().ref(`photo-dog/${JSON.parse(sessionStorage.userBarkify).uid}`);
  const task = storageRef.put(photoDog);
  task.on('state_changed',
    (snapshot) => {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      document.querySelector('#uploader').value = percentage;
    },
    () => {
      console.log('no se subio tu foto');
    },
    () => {
      console.log('se subio tu foto');
    });
};

// bajar fotos
export const downloadProfilePhoto = () => {
  const storageRef = firebase.storage().ref(`photo-dog/${JSON.parse(sessionStorage.userBarkify).uid}`);
  storageRef.getDownloadURL()
    .then((url) => {
      console.log('estoy trayendome la imagen');
      const img = document.querySelector('#myProfilePic');
      img.src = url;
    })
    .catch((error) => {
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
        default:
          // default error
          break;
      }
    });
};

// bajar data y mostrar en perfil
export const accessData = () => {
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
        document.querySelector('#contenidoDeLikes').innerHTML = doc.data().like;
        let sumCommentDog = ''
        const commentsDog = document.querySelector('#commentsDog');
        for (let i = 0; i < (doc.data().commentDog).length; i++) {
          sumCommentDog
          += `<div class="individualComment">
                <h1 class="nameDogComment">${doc.data().commentDog[i].myName}</h1>
                <p class="commentDog">${doc.data().commentDog[i].comment}</p>
              </div>`;
        commentsDog.innerHTML = sumCommentDog;
        }
      }
    });
  });
};

// bajar data y mostrar en el home (perros que no les he puesto like)
export const showDogHome = () => {
  const home = document.querySelector('#contentHome');
  // para acceder a mi ubicación y guardar mis datos
  let myLocation = '';
  db.collection('doggys').doc(JSON.parse(sessionStorage.userBarkify).uid).onSnapshot((doc) => {
    myLocation = doc.data().locationDog;
  });
  // accediendo a todos los datos de la coleccion 
  db.collection('doggys').get().then((querySnapshot) => {
    let sumShowDog = '';
    querySnapshot.forEach((doc) => {
      let condition = 0;
      // recorre todos los perros que han hecho like, y si aparece mi uid guarda la condicion
      for (let i = 0; i < (doc.data().likedDog).length; i++) {
        if ((doc.data().likedDog)[i] === JSON.parse(sessionStorage.userBarkify).uid) {
          condition = 'liked';
        }
      }
      // me muestra si no le hecho like, no me muestra a mi mismo, y me muestra todos los de mi ubicacion 
      if (condition !== 'liked' && doc.data().uid !== JSON.parse(sessionStorage.userBarkify).uid && doc.data().locationDog === myLocation) {
        firebase.storage().ref(`photo-dog/${doc.data().uid}`).getDownloadURL()
          .then((url) => {
            const photoProfileDog = url;
            sumShowDog
              += `<div class="profilesDogsHome">
                    <h1 class="nameDogFeed">${doc.data().nameDog}</h1>
                    <div class="containerImgProfileDogFeed">
                      <img class="imgProfileDogFeed" src="${photoProfileDog}">
                    </div> 
                    <p class="locationFeed">${doc.data().locationDog}</p>
                    <div clas="containerLikesDogFeed">
                      <div class="pawLikedPawFeed">
                        <img id="${doc.data().uid}" class="iconPawLikesFeed" src="./img/iconPaw.png"  alt="paw">
                      </div>
                    <p class="texts contentLikesFeed">${doc.data().like}</p>
                  </div>
                </div>`;
            home.innerHTML = sumShowDog;
          });
      }
    });
  });
};

// like a perros
export const likeDog = (e) => {
  db.collection('doggys').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (e.target.id === doc.data().uid) {
        firebase.firestore().collection('doggys').doc(doc.data().uid).update({
          like: doc.data().like + 1,
          likedDog: firebase.firestore.FieldValue.arrayUnion(JSON.parse(sessionStorage.userBarkify).uid)
        })
        window.location.hash = '#/LikedDogs'
      }
    });
  });
};

// mostrar los perros que les hice like
export const showLikeDog = () => {
  const screenLikedDog = document.querySelector('#likesProfiles');
  db.collection('doggys').get().then((querySnapshot) => {
    let sumShowDogLikes = '';
    // recorre toda la data de los perros
    querySnapshot.forEach((doc) => {
      // for que recorre array todos los perros que han dado like a el mismo
      for (let i = 0; i < (doc.data().likedDog).length; i++) {
        if ((doc.data().likedDog)[i] === JSON.parse(sessionStorage.userBarkify).uid) {
          firebase.storage().ref(`photo-dog/${doc.data().uid}`).getDownloadURL()
            .then((url) => {
              const photoLikeDog = url;
              sumShowDogLikes
                += `<div class="containerDoggys">
              <h1 class="nameDogLikedDogs">${doc.data().nameDog}</h1>
              <div class="containerImgProfileDog">
                <img class="imgProfileDog" src="${photoLikeDog}">
              </div>
              <p class="location">${doc.data().locationDog}</p>
              <div class="containerLikesDog">
                <div class="pawLikedPaw">
                  <img class="iconPawLikes" id="${doc.data().uid}" src="./img/iconPawLiked.png"  alt="paw">
                </div>
                <p class="texts contentLikes">${doc.data().like}</p>
              </div>
            </div>`;
              screenLikedDog.innerHTML = sumShowDogLikes;
            });
        }
      }
    });
  });
};

// borrar perfil creado de mi perro
export const deleteMyProfile = () => {
  const modalAceptacion = document.querySelector('#modalAceptation');
  modalAceptacion.style.display = 'block';
  const answerNo = document.querySelector('#answerNo');
  answerNo.addEventListener('click', () => {
    modalAceptacion.style.display = 'none';
  });
  document.querySelector('#answerYes').addEventListener('click', () => {
    let answerYes = modalAceptacion.innerHTML;
    if (answerYes) {
      // aca se borra
      db.collection('doggys').doc(JSON.parse(sessionStorage.userBarkify).uid).delete().then(() => {
        console.log('se borro');
        window.location.hash = '#/myProfileEmpty';
        // aca se borran todos los likes que hice y la información asociada a mi uid
        db.collection('doggys').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            for (let i = 0; i < (doc.data().likedDog).length; i++) {
              if ((doc.data().likedDog)[i] === JSON.parse(sessionStorage.userBarkify).uid) {
                db.collection('doggys').doc(doc.data().uid).update({
                  like: doc.data().like - 1,
                  likedDog: firebase.firestore.FieldValue.arrayRemove(JSON.parse(sessionStorage.userBarkify).uid),
                });
              }
            }
          });
        })
          .catch((error) => {
            console.error('se fue: ', error);
          });
      });
    }
  });
};

// Dislike perritos
export const dislikeDog = (e) => {
  // const db = firebase.firestore();
  // en la info de los demas perros se resta el like que hice y se borra mi uid asociado a eso
  db.collection('doggys').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (e.target.id === doc.data().uid) {
        firebase.firestore().collection('doggys').doc(doc.data().uid).update({
          like: doc.data().like - 1,
          likedDog: firebase.firestore.FieldValue.arrayRemove(JSON.parse(sessionStorage.userBarkify).uid)
        })
        window.location.hash = '#/Home'
      }
    });
  });
};

export const otherProfile = (e) => {
  db.collection('doggys').doc(e.target.src.slice(87, 115)).onSnapshot((doc) => {
    document.querySelector('#nameDogCloudOther').innerHTML = doc.data().nameDog;
    document.querySelector('#ageDogCloudOther').innerHTML = doc.data().ageDog;
    document.querySelector('#sexDogCloudOther').innerHTML = doc.data().sexDog;
    document.querySelector('#sizeDogCloudOther').innerHTML = doc.data().sizeDog;
    document.querySelector('#biographyDogCloudOther').innerHTML = doc.data().biographyDog;
    document.querySelector('#personalityDogCloud1Other').innerHTML = doc.data().personalityDog.personalityDog1;
    document.querySelector('#personalityDogCloud2Other').innerHTML = doc.data().personalityDog.personalityDog2;
    document.querySelector('#personalityDogCloud3Other').innerHTML = doc.data().personalityDog.personalityDog3;
    document.querySelector('#personalityDogCloud4Other').innerHTML = doc.data().personalityDog.personalityDog4;
    document.querySelector('#personalityDogCloud5Other').innerHTML = doc.data().personalityDog.personalityDog5;
    document.querySelector('#personalityDogCloud6Other').innerHTML = doc.data().personalityDog.personalityDog6;
    document.querySelector('#personalityDogCloud7Other').innerHTML = doc.data().personalityDog.personalityDog7;
    document.querySelector('#scheduleDogCloud1Other').innerHTML = doc.data().scheduleDog.scheduleDog1;
    document.querySelector('#scheduleDogCloud2Other').innerHTML = doc.data().scheduleDog.scheduleDog2;
    document.querySelector('#scheduleDogCloud3Other').innerHTML = doc.data().scheduleDog.scheduleDog3;
    document.querySelector('#placeDogCloud1Other').innerHTML = doc.data().placeDog.placeDog1;
    document.querySelector('#placeDogCloud2Other').innerHTML = doc.data().placeDog.placeDog2;
    document.querySelector('#placeDogCloud3Other').innerHTML = doc.data().placeDog.placeDog3;
    document.querySelector('#contenidoDeLikesOther').innerHTML = doc.data().like;
    document.querySelector('.btnComment').setAttribute("id", doc.data().uid);
    let sumCommentDog = ''
    const commentsDog = document.querySelector('#commentsDog');
    for (let i = 0; i < (doc.data().commentDog).length; i++) {
      sumCommentDog
        += `<div class="individualComment">
              <h1 class="nameDogComment">${doc.data().commentDog[i].myName}</h1>
              <p class="commentDog">${doc.data().commentDog[i].comment}</p>
            </div>`;
      commentsDog.innerHTML = sumCommentDog;
    }
  });
  const storageRef = firebase.storage().ref(`photo-dog/${e.target.src.slice(87, 115)}`);
  storageRef.getDownloadURL()
    .then((url) => {
      const img = document.querySelector('#profilePhotoOther');
      img.src = url;
    })
  window.location.hash = '#/otherDogProfile'
};


// comentarios de los perritos
export const commentDog = (e) => {
  db.collection('doggys').doc(JSON.parse(sessionStorage.userBarkify).uid).onSnapshot((doc) => {
    const myName = doc.data().nameDog;
    const comment = document.querySelector('#inputComment').value;
    firebase.firestore().collection('doggys').doc(e.target.id).update({
      commentDog: firebase.firestore.FieldValue.arrayUnion({comment,myName})
    })
  });
};


import { registerNewUser, logInUser, googleSignIn } from './firebase.js'

// PARTE DEL LOG IN - INITIAL PAGE
export const contentInitialPage = () => {
  const screen = document.getElementById('screens');
  screen.innerHTML = '';
  screen.innerHTML =
    `<div id="initialPage">
        <div id="logo">
          <img class="logoImg" src="./img/logo.png" alt="logo">
        </div>
        <br>
        <!-- inicio sesion -->
        <p class="titles"><strong>Bienvenido a Barkify</strong></p>
        <input class="inputs" id="userEmail" type="email" placeholder="Email">
        <input class="inputs" id="userPassword" type="password" placeholder="Contraseña">
        <br>
        <a id="btnLogin" type="button" >Log In</a>
        <br>
        <p><u>¿Olvidaste tus datos de inicion de sesión? <strong>Recuperar</strong></u></p>
        <br>
        <!-- ingresar con google -->
        <div id="btnGoogle" class="google-btn">
          <div class="google-icon-wrapper">
            <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
          </div>
          <p class="btn-text"><b>Sign in with google</b></p>
        </div>
        <br>
        <a id="textSignIn" href="#/SignIn"><strong>¿No estas en Barkify aún? Regístrate</strong></a>
        </div>`;

  //LOG IN
  const LogIn = () => {
    const buttonLogin = document.querySelector('#btnLogin');
    const email = document.querySelector('#userEmail').value;
    const password = document.querySelector('#userPassword').value;
    // buttonLogin.addEventListener('mouseup',buttonLogin.href = '#/Home');
    buttonLogin.addEventListener('click',logInUser(email, password));
  
  }
  document.querySelector('#btnLogin').addEventListener('mousedown', LogIn);


  const signInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    googleSignIn(provider);
  }
 document.querySelector('#btnGoogle').addEventListener('click', signInGoogle)

};


// PARTE DEL REGISTRO (SIGN IN)
export const contentSignIn = () => {
  const screen = document.getElementById('screens');
  screen.innerHTML = '';
  screen.innerHTML =
    `<div id="containerSignIn">
      <div id="signIn">
        <div id="titleSignIn">
        <p id="back" class="titles">&#10094</p>
        <p class="titles">Sign In</p>
        <p class="titles">&#10006;</p>
      </div>
      <br>
      <div id="logoSignIn">
        <img class="logoImg" src="img/logo.png" alt="logo">
      </div>
      <br>
      <div id="mailQuestionSignIn" class="questionSignIn">
        <p><strong>¿Cuál es tu correo?</strong></p>
        <br>
        <input class="inputs" type="email" id="newUserEmail" placeholder="Correo">
        <button class="btnContinue" id="btnToPassword">Siguiente</button>
      </div>
      <div id="passwordQuestionSignIn" class="hide questionSignIn">
        <p><strong>Ingrese una Contraseña</strong></p>
        <br>
        <input class="inputs" type="password" id="newUserPassword" placeholder="Contraseña">
        <button class="btnContinue" id="btnDoneSignIn">Finalizar</button>
      </div>
      <div id="doneSignIn" class="hide questionSignIn">
        <p class="titles"><strong>Bienvenido a Barkify!!!</strong></p>
        <br>
        <p>Haz finalizado tu registro con exito!</p>
        <p>Para culminar tu registro, por favor verifica tu mail</p>
        <a type="button" class="btnContinue" href="" id="btnBackLogIn">Iniciar Sesión</a>
      </div>
    </div>
  </div>`;

  // MOVERNOS EN EL SIGN IN DEL CORREO A LA CONTRASEÑA
  const nextPage = () => {
    document.querySelector('#mailQuestionSignIn').classList.add('hide');
    document.querySelector('#passwordQuestionSignIn').classList.remove('hide');
  };
  document.querySelector('#btnToPassword').addEventListener('click', nextPage);

  //MOVERNOS EN EL SIGN IN DE LA CONTRASEÑA A MENSAJE DE INICIAR SESIÓN 
  const finishRegistration = () => {
    document.querySelector('#passwordQuestionSignIn').classList.add('hide');
    document.querySelector('#doneSignIn').classList.remove('hide');
  };
  document.querySelector('#btnDoneSignIn').addEventListener('click', finishRegistration);

  // SIGN IN 
  const signIn = () => {
    const email = document.querySelector('#newUserEmail').value;
    const password = document.querySelector('#newUserPassword').value;
    document.querySelector('#btnDoneSignIn').addEventListener('mouseup', registerNewUser(email, password));
  }
  document.querySelector('#btnDoneSignIn').addEventListener('mousedown', signIn);
};


// PARTE DEL HOME 
export const contentHome = () => {
  const screen = document.getElementById('screens');
  screen.innerHTML = '';
  screen.innerHTML =
    `<div id="mainScreen">
      <header class="header">
        <div id="logoHeader">
          <img class="logoImg" src="img/logo.png" alt="logo">
        </div>
      </header>
      <main id="mainContentInitialPage">
        <p>Aún no has creado un perfil para tu mascota</p>
        <button class="btnContinue" id="btnCreateProfile">Crear Perfil</button>
      </main>
      <footer>
        <div class="paw">
          <img class="iconsFooter" src="img/heartIconNormal.png" alt="paw">
        </div>
        <div class="home">
          <img class="iconsFooter" src="img/homeIconNormal.png" alt="home">
        </div>
        <div class="profile">
          <img class="iconsFooter" src="img/searchIconNormal.png" alt="profile">
        </div>
      </footer>
    </div>`;
};





/* <div id="firstQuestionSignIn" class="hide questionSignIn">
      <p><strong>Ingrese su nombre y apellido</strong></p>
      <br>
      <button class="btnContinue" id="btnContinue">Siguiente</button>
    </div>
    <div id="secondQuestionSignIn" class="hide questionSignIn">
      <p><strong>¿Cuál es tu nombre de usuario?</strong></p>
      <br>
      <input class="inputs" type="text" id="userName" placeholder="Nombre de Usuario">
      <button class="btnContinue" id="btnContinue2">Siguiente</button>
    </div> --></br> */

    // <!-- <div id="fifthQuestionSignIn" class="hide questionSignIn">
    //   <p><strong>Comuna donde reside</strong></p>
    //   <br>
    //   <select class="inputs" name="Comuna" id="userSelect">
    //     <option value="default" selected> Indique la comuna </option>
    //     <option value="comuna"> La Reina</option>
    //     <option value="comuna2"> Las Condes </option>
    //     <option value="comuna3"> Ñuñoa </option>
    //     <option value="comuna4"> Providencia </option>
    //     <option value="comuna5">Santiago (Centro)</option>
    //   </select>
    //   <button class="btnContinue" id="btnContinue5">Siguiente</button>
    // </div> -->



export const contentSignIn = () => {
  const signIn = `<div id="containerSignIn">
      <div id="signIn">
        <div id="titleSignIn">
          <p id="back" class="titles">&#10094</p>
          <p class="titles">Sign In</p>
          <a href="" class="titles">&#10006;</a>
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
          <button class="hideButton" id="btnToPassword">Siguiente</button>
          <div id="contentProgress"><div id="signInOne"></div></div>
        </div>
        <div id="passwordQuestionSignIn" class="hide questionSignIn">
          <p><strong>Ingrese una Contraseña</strong></p>
          <br>
          <input class="inputs" type="password" id="newUserPassword" placeholder="Contraseña">
          <button class="hideButton" id="btnDoneSignIn">Finalizar</button>
          <div id="contentProgress"><div id="signInOne"><div id="signInTwo"></div></div></div>
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
  return signIn;
};

export const contentInitialPage = () => {
  const initialPage =
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
    </div>`
  return initialPage;
};
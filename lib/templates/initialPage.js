export const contentInitialPage = () => {
  const initialPage =
  `<div id="photoContentInitialPage">
    <div id="photoInitialPage">
      <img src="./img/photodogpage.jpg" id="photoLogin">
    </div>
    <div id="initialPage">
      <div id="logo">
        <img class="logoImg" src="./img/logo.png" alt="logo">
      </div>
      <br>
      <!-- inicio sesion -->
      <p class="titles"><strong>Bienvenido a Barkify</strong></p>
      <br>
      <input class="inputs" id="userEmail" type="email" placeholder="Email">
      <input class="inputs" id="userPassword" type="password" placeholder="Contraseña">
      <p id="errormensaje" class="erromensaje"></p>
      <br>
      <button id="btnLogin" >Log In</button>
      <br>
      <a href='#/forgetPassword'>¿Olvidaste tus datos de inicion de sesión? <strong>Recuperar</strong></a>
      <br>
      <!-- ingresar con google -->
      <div id="btnGoogle" class="google-btn">
        <div class="google-icon-wrapper">
          <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
        </div>
        <p class="btn-text"><b>Entrar con google</b></p>
      </div>
      <p id="errogoogle" class="erromensaje"></p>
      <br>
      <a id="textSignIn" href="#/SignIn"><strong>¿No estas en Barkify aún? Regístrate</strong></a>
    </div>
  </div>`;
  return initialPage;
};

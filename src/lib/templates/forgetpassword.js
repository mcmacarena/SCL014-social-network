export const contentForget = () => {
  const forgetPassword = `<div id="containerForgetPassword">
      <div id="forgetPassword">
          <div id="titlesForget">
            <a href=" " id="back" class="titles">&#10094</a>
            <p class="titles">Restablecer contraseña</p>
            <a href=" "class="titles">&#10006;</a>
          </div>
          <br>
          <div id="logoSignIn">
            <img class="logoImg" src="img/logo.png" alt="logo">
          </div>
          <br>
          <div id="mailForgetPassword" class="questionSignIn">
            <p><strong>¿Cuál es tu correo?</strong></p>
            <br>
            <input class="inputs" type="email" id="forgetPasswordEmail" placeholder="Correo">
            <p id="textForgetPassword"></p>
            <button class="btnContinue" id="forgetPasswordBtn">Enviar</button>
            
          </div>
        </div>
      </div>`;
  return forgetPassword;
};
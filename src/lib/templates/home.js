export const contentHome = () => {
  const home =
    `<div id="mainScreen">
      <header class="header">
        <div id="logoHeader">
          <img class="logoImg" src="img/logo.png" alt="logo">
        </div>
      </header>
      <main id="mainContentInitialPage">
        <p>Aún no has creado un perfil para tu mascota</p>
        <a type="button" href="#/createProfile" class="btnContinue" id="btnCreateProfile">Crear Perfil</a>
      </main>
      <footer>
        <div class="paw">
          <img class="iconsFooter" src="img/heartIconNormal.png" alt="paw">
        </div>
        <div class="home">
          <img class="iconsFooter" src="img/homeIconNormal.png" alt="home">
        </div>
        <div class="profile">
          <a href="#/myProfile" id="myProfileIcon"><img class="iconsFooter" src="img/searchIconNormal.png" alt="profile"></a>
        </div>
      </footer>
    </div>`;
    return home
};




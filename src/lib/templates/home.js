export const contentHome = () => {
  const home =
    `<div id="mainScreen">
      <header class="header headerHome">
        <div id="logoAndToggle">
          <div id="logoHeader">
            <img class="logoImg" src="img/logo.png" alt="logo">
          </div>
          <div>
            <span class="toggle">&#9776;</span>
          </div>
        </div>
      </header>    
      <div id='menuBar'>
          <p>${JSON.parse(sessionStorage.userBarkify).email}</p>
          <a href=" " class="btnContinue" id="cerrarbtn">Cerrar sesión</a>
      </div>
      <main id="mainContentInitialPage">
        <p>Aún no has creado un perfil para tu mascota</p>
        <br>
        <a type="button" href="#/createProfile" id="btnCreateProfile" class="btnCreateProfile">Crear Perfil</a>

      </main>
      <footer>
        <div class="paw">
          <a href="#/LikedDogs" id="PawIcon"><img class="iconsFooter" src="./img/iconPaw.png" alt="paw"></a>
        </div>
        <div class="home">
          <a href="#/HomeTwoPorelmomento" id="HomeIcon"><img class="iconsFooter" src="./img/homeIconLiked.png" alt="home"></a>
        </div>
        <div class="profile">
          <a href="#/myProfile" id="myProfileIcon"><img class="iconsFooter" src="./img/iconProfile.png" alt="profile"></a>
        </div>
      </footer>
    </div>`;
  return home
};




export const contentMyProfileEmpty = () => {
  const myProfileEmpty = 
  `<header class='header headerHome'>
    <div id="logoAndToggle">
      <div id="logoHeader">
        <img class="logoImg" src="img/logo.png" alt="logo">
      </div>
      <div class="buttonsHeader">
        <div class="paw">
          <a href="#/LikedDogs" id="pawIconHeader"><img class="iconsFooter" src="./img/iconPawHeader.png" alt="paw"></a>
        </div>
        <div class="home">
          <a href="#/Home" id="homeIconHeader"><img class="iconsFooter" src="./img/homeIconHeader.png" alt="home"></a>
        </div>
        <div class="profile">
          <a href="#/myProfile" id="myProfileIconHeader"><img class="iconsFooter"  src="./img/iconProfileLiked.png" alt="profile"></a>
        </div>
      </div>
    </div>
    <div id="contentToggle">
      <span class="toggle">&#9776;</span>
    </div>
  </header>    
  <div id='menuBar'>
    <div><p id='emailLogOut'>${JSON.parse(sessionStorage.userBarkify).email}</p></div>
    <br>
    <div><a href=" " class="btnLogOut" id="cerrarbtn">Cerrar sesión</a></div>
  </div>
  <main class="mainMyProfileEmpty">
    <div id="mainContentInitialPage">
      <p>Aún no has creado un perfil para tu mascota</p>
      <br>
      <a type="button" href="#/createProfile" id="btnCreateProfile" class="btnCreateProfile">Crear Perfil</a>
    </div>
  </main>
  <footer>
    <div class="paw">
      <a href="#/LikedDogs" id="PawIcon"><img class="iconsFooter" src="./img/iconPaw.png" alt="paw"></a>
    </div>
    <div class="home">
      <a href="#/Home" id="HomeIcon"><img class="iconsFooter" src="./img/homeIconNormal.png" alt="home"></a>
    </div>
    <div class="profile">
      <img class="iconsFooter" src="./img/iconProfileLiked.png" alt="profile">
    </div>
  </footer>`;
  return myProfileEmpty;
};

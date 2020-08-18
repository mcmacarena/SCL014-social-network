export const contentMyProfile = () => {
  const myProfile = 
  `<header class="header headerHome">
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
      <div>
        <p id='emailLogOut'>${JSON.parse(sessionStorage.userBarkify).email}</p>
      </div>
      <br>
      <div>
        <button class="eliminateProfile">Eliminar Perfil</button>
        <div id='modalAceptation'>
          <div id='contentModalAceptacion'>
            <p>¿Estas seguro de querer eliminar tu perfil?</p>
            <button id="answerYes">Si</button>
            <button id="answerNo">No</button>
          </div>
        </div>
      </div>
      <br>
      <div>
        <a href=" " class="btnLogOut" id="cerrarbtn">Cerrar sesión</a>
      </div>
    </div> 
    <main class="mainMyProfile">
      <div id="myProfile">
        <div>
          <p class="titleMyProfile">Mi perfil</p>
          <div id="editIcon">
            <img id="iconEdit" />
          </div>
        </div>
        <div id="profilePicInfo">
          <div class="imgProfilePic">
            <img id="myProfilePic" />
          </div>
          <div class="nameInfo">
            <p id="nameDogCloud" class="nametitles"></p>
            <p id="ageDogCloud" class="infoBasic"></p>
            <p id="sexDogCloud" class="infoBasic"></p>
            <p id="sizeDogCloud" class="infoBasic"></p>
            <div id="containerPawLikes">
              <div class="paw" id="iconPawMyprofile">
                <img
                  class="iconsFooter"
                  src="./img/iconPawLiked.png"
                  alt="paw"
                />
              </div>
              <div>
                <p id="contenidoDeLikes" class="texts"></p>
              </div>
            </div>
          </div>
        </div>
        <div id="personalitySchedule">
          <div>
            <p class="titleProfilePerso">Personalidad</p>
            <div id="infoPersonality" class="styleContainerProfile">
              <p id="personalityDogCloud1" class="texts"></p>
              <p id="personalityDogCloud2" class="texts"></p>
              <p id="personalityDogCloud3" class="texts"></p>
              <p id="personalityDogCloud4" class="texts"></p>
              <p id="personalityDogCloud5" class="texts"></p>
              <p id="personalityDogCloud6" class="texts"></p>
              <p id="personalityDogCloud7" class="texts"></p>
            </div>
          </div>
          <div>
            <p class="titleProfileSchedule">Horarios de paseo</p>
            <div id="infoSchedule" class="styleContainerProfile">
              <p id="scheduleDogCloud1" class="textsShedule"></p>
              <p></p>
              <p id="scheduleDogCloud2" class="textsShedule"></p>
              <p></p>
              <p id="scheduleDogCloud3" class="textsShedule"></p>
              <p></p>
            </div>
          </div>
        </div>
        <div>
          <p class="titleProfilePlaces">Plaza o lugares frecuentes</p>
          <div id="infoPlaces" class="styleContainerProfile">
            <p id="placeDogCloud1" class="texts"></p>
            <p id="placeDogCloud2" class="texts"></p>
            <p id="placeDogCloud3" class="texts"></p>
          </div>
        </div>
        <div>
          <p class="titleProfileBio">Biografía</p>
          <div id="infoBio" class="styleContainerProfile">
            <p id="biographyDogCloud" class="texts"></p>
          </div>
        </div>
      </div>
      <div id="commentmyProfile">
        <h1 class="titlesComment">Comentarios</h1>
    
        <div id="commentsDog"></div>
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
      <a href="#/myProfile" id="myProfileIcon"><img class="iconsFooter"  src="./img/iconProfileLiked.png" alt="profile"></a>
      </div>
   </footer>`;
  return myProfile;
};

export const contentMyProfile = () => {
  const myProfile =
    `<header class="header">
      <div id="logoHeader">
        <img class="logoImg" src="img/logo.png" alt="logo">
      </div>
      </header>  
      <main id="myProfile">
      <div>
        <p class="titleMyProfile">Mi perfil</p>
        <div id="editIcon">
          <img id="iconEdit">
        </div>
      </div>
      <div id="profilePicInfo">
        <div class="imgProfilePic">
          <img id="myProfilePic" src="img/osa.jfif">
        </div>
        <div class="nameInfo">
          <p id="nameDogCloud" class="titles"></p>
          <p id="ageDogCloud" class="infoBasic"></p>
          <p id="sexDogCloud" class="infoBasic"></p>
          <p id="sizeDogCloud" class="infoBasic"></p>
        </div>
      </div>
      <div id="personalitySchedule">
        <div>
          <p class="titleProfile">Personalidad</p>
          <div class="styleContainerProfile" id="infoPersonality">
            <p class="texts">Sociable</p>
            <p class="texts">Tranquilo</p>
          </div>
        </div>
        <div>
          <p class="titleProfile">Horarios de paseo</p>
          <div id="infoSchedule" class="styleContainerProfile">
            <p class="texts">mañana</p>
            <p class="texts">Tarde</p>
          </div>
        </div>
      </div>
      <div>
        <p class="titleProfile">Plaza o lugares frecuentes</p>
          <div id="infoPlaces" class="styleContainerProfile">
            <p id "places" class="texts"></p>
          </div>
      </div>
      <div>
        <p class="titleProfile">Biografía</p>
        <div id="infoBio" class="styleContainerProfile"> 
          <p id="biographyDogCloud" class="texts"> 
          </p>
        </div>
      </div>
      <div>
        <div class="paw">
          <img class="iconsFooter" src="img/heartIconNormal.png" alt="paw">
        </div>
        <p id="contenidoDeLikes" class="texts">10</p>
      </div>
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
   </footer>`;
return myProfile
};
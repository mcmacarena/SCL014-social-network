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
          <p class="titles">Osita</p>
          <p class="infoBasic">8 años</p>
          <p class="infoBasic">Hembra</p>
          <p class="infoBasic">Grande</p>
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
            <p class="texts">Mañana</p>
            <p class="texts">Tarde</p>
          </div>
        </div>
      </div>
      <div>
        <p class="titleProfile">Plaza o lugares frecuentes</p>
          <div id="infoPlaces" class="styleContainerProfile">
            <p class="texts">Parque Inés de Suarez</p>
          </div>
      </div>
      <div>
        <p class="titleProfile">Biografía</p>
        <div id="infoBio" class="styleContainerProfile"> 
          <p class="texts">Soy un poco floja, pero bien sociable.
              me gusta que me acaricien y la comidita.
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
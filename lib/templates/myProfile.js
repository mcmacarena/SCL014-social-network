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
          <p id="nameDogCloud" class="nametitles"></p>
          <p id="ageDogCloud" class="infoBasic"></p>
          <p id="sexDogCloud" class="infoBasic"></p>
          <p id="sizeDogCloud" class="infoBasic"></p>
        </div>
      </div>
      <div id="personalitySchedule">
        <div>
          <p class="titleProfilePerso">Personalidad</p>
          <div id="infoPersonality" class="styleContainerProfile" >
            <p id='personalityDogCloud1' class='texts'></p>
            <p id='personalityDogCloud2' class='texts'></p>
            <p id='personalityDogCloud3' class='texts'></p>
            <p id='personalityDogCloud4' class='texts'></p>
            <p id='personalityDogCloud5' class='texts'></p>
            <p id='personalityDogCloud6' class='texts'></p>
            <p id='personalityDogCloud7' class='texts'></p>
          </div>
        </div>
        <div>
          <p class="titleProfileSchedule">Horarios de paseo</p>
          <div id="infoSchedule" class="styleContainerProfile">
            <p id='scheduleDogCloud1' class='texts'><p>
            <p id='scheduleDogCloud2' class='texts'><p>
            <p id='scheduleDogCloud3' class='texts'><p>
          </div>
        </div>
      </div>
      <div>
        <p class="titleProfilePlaces">Plaza o lugares frecuentes</p>
          <div id="infoPlaces" class="styleContainerProfile">
            <p id='placeDogCloud1' class='texts'></p>
            <p id='placeDogCloud2' class='texts'></p>
            <p id='placeDogCloud3' class='texts'></p>            
          </div>
      </div>
      <div>
        <p class="titleProfileBio">Biografía</p>
        <div id="infoBio" class="styleContainerProfile"> 
          <p id="biographyDogCloud" class="texts"> 
          </p>
        </div>
      </div>
      <div id="containerPawLikes">
        <div class="paw" id="iconPawMyprofile">
          <img class="iconsFooter" src="img/heartIconNormal.png" alt="paw">
        </div>
        <p id="contenidoDeLikes" class="texts">HOLAMUNDO</p>
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
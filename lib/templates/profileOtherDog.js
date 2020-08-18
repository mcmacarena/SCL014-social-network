export const contentProfileOtherDog = () => {
  const profileOtherDog = `<header class="header headerHome">
    <div id="logoAndToggle">
      <div id="logoHeader">
        <img class="logoImg" src="img/logo.png" alt="logo">
      </div>
      <div class="buttonsHeader">
        <div class="paw">
          <a href="#/LikedDogs" id="pawIconHeader"><img class="iconsFooter" src="./img/iconPawHeader.png" alt="paw"></a>
        </div>
        <div class="home">
          <a href="#/Home" id="homeIconHeader"><img class="iconsFooter" src="./img/homeIconLiked.png" alt="home"></a>
        </div>
        <div class="profile">
          <a href="#/myProfile" id="myProfileIconHeader"><img class="iconsFooter" src="./img/iconProfileHeader.png" alt="profile"></a>
        </div>
      </div>
    </div>
  </header>    
  <main id="otherProfile">
    <div>
      <div>
        <p class="titleMyProfile"></p>
        <div id="editIcon">
          <img id="iconEdit">
        </div>
      </div>
      <div id="profilePicInfo">
        <div class="imgProfilePic">
          <img id="profilePhotoOther" >
        </div>
        <div class="nameInfo">
          <p id="nameDogCloudOther" class="nametitles"></p>
          <p id="ageDogCloudOther" class="infoBasic"></p>
          <p id="sexDogCloudOther" class="infoBasic"></p>
          <p id="sizeDogCloudOther" class="infoBasic"></p>
          <div id="containerPawLikes">
            <div class="paw" id="iconPawMyprofile">
              <img class="iconsFooter" src="./img/iconPawLiked.png" alt="paw">
            </div>
            <div>
              <p id="contenidoDeLikesOther" class="texts"></p>
            </div>
          </div>
        </div>
      </div>
      <div id="personalitySchedule">
        <div>
          <p class="titleProfilePerso">Personalidad</p>
          <div id="infoPersonality" class="styleContainerProfile" >
            <p id='personalityDogCloud1Other' class='texts'></p>
            <p id='personalityDogCloud2Other' class='texts'></p>
            <p id='personalityDogCloud3Other' class='texts'></p>
            <p id='personalityDogCloud4Other' class='texts'></p>
            <p id='personalityDogCloud5Other' class='texts'></p>
            <p id='personalityDogCloud6Other' class='texts'></p>
            <p id='personalityDogCloud7Other' class='texts'></p>
          </div>
        </div>
        <div>
          <p class="titleProfileSchedule">Horarios de paseo</p>
          <div id="infoSchedule" class="styleContainerProfile">
            <p id='scheduleDogCloud1Other' class='textsShedule'><p>
            <p id='scheduleDogCloud2Other' class='textsShedule'><p>
            <p id='scheduleDogCloud3Other' class='textsShedule'><p>
          </div>
        </div>
      </div>
      <div>
        <p class="titleProfilePlaces">Plaza o lugares frecuentes</p>
          <div id="infoPlaces" class="styleContainerProfile">
            <p id='placeDogCloud1Other' class='texts'></p>
            <p id='placeDogCloud2Other' class='texts'></p>
            <p id='placeDogCloud3Other' class='texts'></p>            
          </div>
      </div>
      <div>
        <p class="titleProfileBio">Biografía</p>
        <div id="infoBio" class="styleContainerProfile"> 
          <p id="biographyDogCloudOther" class="texts"> 
          </p>
        </div>
      </div> 
    </div>
    <div id="commentProfile">
      <div id="commentsDog">
      </div>
      <textarea id="inputComment" rows="4" cols="50" placeholder="Escriba un comentario"></textarea>
      <button class="btnComment">Enviar</button>
    </div>
  </main>
  <footer>
    <div class="paw">
      <a href="#/LikedDogs" id="PawIcon"><img class="iconsFooter" src="./img/iconPawLiked.png" alt="paw"></a>
    </div>
    <div class="home">
      <a href="#/Home" id="HomeIcon"><img class="iconsFooter" src="./img/homeIconNormal.png" alt="home"></a>
    </div>
    <div class="profile">
      <a href="#/myProfile" id="myProfileIcon"><img class="iconsFooter"  src="./img/iconProfile.png" alt="profile"></a>
    </div>
  </footer>`;
return profileOtherDog;
};

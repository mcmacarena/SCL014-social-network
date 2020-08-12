export const contentlikedDog = () => {
  const likedDog =
    `
    <header class="header">
    <div id="logoHeader">
      <img class="logoImg" src="img/logo.png" alt="logo">
    </div>
  </header>

  <main>
    <div id="likesProfiles">
      <div id="containerDoggys">
        <h1 id="nameDogLikedDogs">Joe Jacinto</h1>
        <div id="containerImgProfileDog">
          <img id="imgProfileDog" src="./img/osa.jfif">
        </div>
        <p id="location">Ñuñoa</p>
        <div id="containerLikesDog">
          <div class="pawLikedPaw">
            <img id="iconPawLikes" src="./img/iconPawLiked.png" id="iconPawProfiles" alt="paw">
          </div>
          <p id="contentLikes" class="texts">14</p>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <div class="paw">
    <a href="#/LikedDogs" id="PawIcon"><img class="iconsFooter" src="./img/iconPawLiked.png" alt="paw"></a>
    </div>
    <div class="home">
    <a href="#/HomeTwoPorelmomento" id="HomeIcon"><img class="iconsFooter" src="./img/homeIconNormal.png" alt="home"></a>
    </div>
    <div class="profile">
    <a href="#/myProfile" id="myProfileIcon"><img class="iconsFooter" src="./img/iconProfile.png" alt="profile"></a>
    </div>
  </footer>`;
  return likedDog
};
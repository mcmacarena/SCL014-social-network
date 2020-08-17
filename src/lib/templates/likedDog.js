export const contentlikedDog = () => {
  // document.location.reload(true);
  const likedDog = `
    <header id="headerLikeDogs" class="header">
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
          <a href="#/myProfile" id="myProfileIconHeader"><img class="iconsFooter"  src="./img/iconProfileHeader.png" alt="profile"></a>
        </div>
      </div>
    </header>

  <main>
    <div id="likesProfiles">
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
    <a href="#/myProfile" id="myProfileIcon"><img class="iconsFooter" src="./img/iconProfile.png" alt="profile"></a>
    </div>
  </footer>`;
  return likedDog;
};
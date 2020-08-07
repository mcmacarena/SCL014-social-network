export const contentCreateProfile = () =>{
const createProfile=
  `<div id="containerCreateProfile">
    <div id="createProfile">
      <div id="titleCreateProfile">
        <p id="back" class="titles">&#10094</p>
        <p class="titles">Crear Perfil</p>
        <p class="titles">&#10006;</p>
      </div>
      <br>
      <div id="logoCreateProfile">
        <img class="logoImg" src="img/logo.png" alt="logo">
      </div>
      <br>
      <div id="nameDogQuestion" class="questionCreatreProfile">
        <p><strong>¿Cuál es el nombre de tu perro?</strong></p>
        <br>
        <input class="inputs" type="text" id="nameDog" placeholder="Nombre">
        <button class="btnContinue" id="btnCreateProfile1">Siguiente</button>
      </div>
      <div id="sexDogQuestion" class="hide questionCreatreProfile">
        <p><strong>¿Cuál es el sexo de tu perro?</strong></p>
        <br>
        <select class="inputs" name="sexDog" id="sexDog">
          <option value="default" selected> Indique su sexo </option>
          <option value="female"> Hembra </option>
          <option value="male"> Macho </option>
        </select>
        <button class="btnContinue" id="btnCreateProfile2">Siguiente</button>
      </div>
      <div id="photoDogQuestion" class="hide questionCreatreProfile">
        <p><strong>Elige una foto de perfil para tu mascota: </strong></p>
        <input type="file" id="photoDog" name="avatar" accept="image/png, img/jpeg">
        <button class="btnContinue" id="btnCreateProfile3">Siguiente</button>
      </div>
      <div id="ageDogQuestion" class="hide questionCreatreProfile">
        <p><strong>¿Cúal es la edad de tu perro?</strong></p>
        <input class="inputs" type="text" id="ageDog" placeholder="Edad">
        <button class="btnContinue" id="btnCreateProfile4">Siguiente</button>
      </div>
      <div id="locationDogQuestion" class="hide questionCreatreProfile">
        <p><strong>Comuna donde reside</strong></p>
        <br>
        <select class="inputs" name="Comuna" id="locationDog">
          <option value="default" selected> Indique la comuna </option>
          <option value="providencia"> Providencia </option>
          <option value="nunoa"> Ñuñoa </option>
        </select>
        <button class="btnContinue" id="btnCreateProfile5">Siguiente</button>
      </div>
      <div id="placesDogQuestion" class="hide questionCreatreProfile">
        <p><strong>Escribe plazas o parques caninos donde paseas con tu perro, mínimo 1 lugar</strong></p>
        <input class="inputs" type="text" id="place1Dog" placeholder="Lugar 1">
        <input class="inputs" type="text" id="place2Dog" placeholder="Lugar 2">
        <input class="inputs" type="text" id="place3Dog" placeholder="Lugar 3">
        <button class="btnContinue" id="btnCreateProfile6">Siguiente</button>
      </div>
      <div id="sizeDogQuestion" class="hide questionCreatreProfile">
        <p><strong>¿Cuál es el tamaño de tu mascota?</strong></p>
        <br>
        <select class="inputs" name="size" id="sizeDog">
          <option value="default" selected> Indique el tamaño </option>
          <option value="small"> Pequeñito</option>
          <option value="medium"> Mediano </option>
          <option value="big"> Grande </option>
        </select>
        <button class="btnContinue" id="btnCreateProfile7">Siguiente</button>
      </div>
      <div id="personalityDogQuestion" class="hide questionCreatreProfile">
        <p><strong> Indica las características de la personalidad de tu perro</strong></p>
        <br>
        <input type="checkbox" id="personality1" value="sleepy"<p>Dormilón</p>
        <input type="checkbox" id="personality2" value="playful" <p> Juguetón </p>
        <input type="checkbox" id="personality3" value="quiet"<p> Tranquilo </p>
        <input type="checkbox" id="personality4" value="sociable"<p> Sociable </p>
        <input type="checkbox" id="personality5" value="atlethic"<p> Atlético </p>
        <input type="checkbox" id="personality6" value="lonely"<p> Solitario </p>
        <input type="checkbox" id="personality7" value="enthusiastic"<p> Entusiasta </p>
        <button class="btnContinue" id="btnCreateProfile8">Siguiente</button>
      </div>
      <div id="scheduleDogQuestion" class="hide questionCreatreProfile">
        <p><strong>Horarios de paseo: </strong></p>
        <br>
          <input type="checkbox" id="schedule1" value="morning"<p>Mañana</p>
          <input type="checkbox" id="schedule2" value="afternoon"<p>Tarde</p>
          <input type="checkbox" id="schedule3" value="night"<p>Noche</p>
          <button class="btnContinue" id="btnCreateProfile9">Siguiente</button>
      </div>
      <div id="biographyDogQuestion" class="hide questionCreatreProfile">
        <p><strong>Cúentanos un poco sobre tu perro</strong></p>
        <br>
        <input class="inputs" type="text" id="biographyDog" placeholder="Agregar pequeña biografía">
        <button class="btnContinue" id="btnCreateProfile10">Finalizar</button>
      </div>
      <div id="screenOtherDogQuestion" class="hide questionCreatreProfile">
        <p class="titles"><strong>Prefencias</strong></p>
        <br>
        <p>Ahora buscaremos amigos para tu mascota según sus prefrencias</p>
        <p>Responde las preguntas a continuación:</p>
        <button class="btnContinue" id="btnCreateProfile11">Empezar</button>      
      </div> 
      <div id="sexPreferencesDogQuestion" class="hide questionCreatreProfile">
        <p><strong>¿Con qué sexo de perro prefiere estar tu mascota?</strong></p>
        <select class="inputs" name="size" id="sexPreferenceDog">
          <option value="default" selected> Indique el sexo</option>
          <option value="female"> Hembra </option>
          <option value="male"> Macho </option>
          <option value="both"> Ambos </option>
        </select>
        <button class="btnContinue" id="btnCreateProfile12">Siguiente</button>
      </div> 
      <div id="sizePreferencesDogQuestion" class="hide questionCreatreProfile">
        <p><strong>¿Con qué tamaño de perro prefiere estar tu mascota?</strong></p>
        <p>Selecciona las todas las preferencias que quieras</p>
        <br>
        <input type="checkbox" id="smallPreference" value="small"<p> Pequeños </p>
        <input type="checkbox" id="mediumPreference" value="medium" <p> Medianos </p>
        <input type="checkbox" id="bigPreference" value="big"<p> Grandes </p>
        <button class="btnContinue" id="btnCreateProfile13">Siguiente</button>
      </div>
      <div id="personalityPreferencesDogQuestion" class="hide questionCreatreProfile">
        <p><strong> Indica las características de la personalidad de los perros que buscas</strong></p>
        <p>Selecciona las todas las que quieras</p>
        <br>
        <input type="checkbox" id="personality1Preference" value="sleepy"<p>Dormilón</p>
        <input type="checkbox" id="personality2Preference" value="playful" <p> Juguetón </p>
        <input type="checkbox" id="personality3Preference" value="quiet"<p> Tranquilo </p>
        <input type="checkbox" id="personality4Preference" value="sociable"<p> Sociable </p>
        <input type="checkbox" id="personality5Preference" value="atlethic"<p> Atlético </p>
        <input type="checkbox" id="personality6Preference" value="lonely"<p> Solitario </p>
        <input type="checkbox" id="personality7Preference" value="enthusiastic"<p> Entusiasta </p>
        <button class="btnContinue" id="btnCreateProfile14">Siguiente</button>
      </div>
      <div id="schedulePreferencesDogQuestion" class="hide questionCreatreProfile">
        <p><strong>Horarios de paseo que buscas: </strong></p>
        <br>
        <input type="checkbox" id="schedule1Preference" value="morning"<p>Mañana</p>
        <input type="checkbox" id="schedule2Preference" value="afternoon"<p>Tarde</p>
        <input type="checkbox" id="schedule3Preference" value="night"<p>Noche</p>
        <button class="btnContinue" id="btnCreateProfile15">Finalizar</button>
      </div>
      <div id="finishPreferencesDogQuestion" class="hide questionCreatreProfile">
        <p class="titles"><strong>Terminaste de crear el perfil de tu perro en Barkify!!</strong></p>
        <br>
        <p>Ahora estás listo para encontrar amigos</p>
        <a type="button" href="#/Home" class="btnContinue" id="btnCreateProfile16">Empezar</a>    
      </div>
    </div>
  </div>`;
  return createProfile
};
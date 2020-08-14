export const contentCreateProfile = () =>{
const createProfile=
  `<div id='containerCreateProfile'>
    <div id='createProfile'>
      <div id='titleCreateProfile'>
        <p id='back' class='titles'>&#10094</p>
        <p class='titles'>Crear Perfil</p>
        <p class='titles'>&#10006;</p>
      </div>
      <br>
      <div id='logoCreateProfile'>
        <img class='logoImg' src='img/logo.png' alt='logo'>
      </div>
      <br>
      <div id='nameDogQuestion' class='questionCreatreProfile'>
        <p><strong>¿Cuál es el nombre de tu perro?</strong></p>
        <br>
        <input class='inputs' type='text' id='nameDog' placeholder='Nombre'>
        <button id='btnCreateProfile1' class='hideButton' >Siguiente</button>
      </div>
      <div id="sexDogQuestion" class="hide questionCreatreProfile">
        <p><strong>¿Cuál es el sexo de tu perro?</strong></p>
        <br>
        <select class='inputSelect' name='sexDog' id='sexDog'>
          <option value='default' selected> Indique su sexo </option>
          <option value='Hembra'> Hembra </option>
          <option value='Macho'> Macho </option>
        </select>
        <button id="btnCreateProfile2" class="hideButton" >Siguiente</button>
      </div>
      <div id="photoDogQuestion" class="hide questionCreatreProfile">
        <p><strong>Elige una foto de perfil para tu mascota: </strong></p>
        <br>
        <progress value='0' max='100' id='uploader'>0%</progress>
        <input type="file" id="photoDog" name="avatar">
        <label for="photoDog" class="avatar">Seleccionar foto</label>
        <button class="hideButton" id="btnCreateProfile3">Siguiente</button>
      </div>
      <div id="ageDogQuestion" class="hide questionCreatreProfile">
        <p><strong>¿Cúal es la edad de tu perro?</strong></p>
        <br>
        <input class="inputs" type="text" id="ageDog" placeholder="Edad">
        <button id="btnCreateProfile4" class="hideButton" >Siguiente</button>
      </div>
      <div id="locationDogQuestion" class="hide questionCreatreProfile">
        <p><strong>Comuna donde reside</strong></p>
        <br>
        <select id="locationDog" class="inputSelect" name="Comuna" >
          <option value="default" selected> Indique la comuna </option>
          <option value="Providencia"> Providencia </option>
          <option value="Nuñoa"> Ñuñoa </option>
        </select>
        <button id="btnCreateProfile5" class="hideButton" >Siguiente</button>
      </div>
      <div id="placesDogQuestion" class="hide questionCreatreProfile">
        <p><strong>Escribe plazas o parques caninos donde paseas con tu perro, mínimo 1 lugar</strong></p>
        <br>
        <input id="placeDog1" class="inputs" type="text" placeholder="Lugar 1">
        <input id="placeDog2" class="inputs" type="text" placeholder="Lugar 2">
        <input id="placeDog3" class="inputs" type="text" placeholder="Lugar 3">
        <button id="btnCreateProfile6" class="hideButton" >Siguiente</button>
      </div>
      <div id="sizeDogQuestion" class="hide questionCreatreProfile">
        <p><strong>¿Cuál es el tamaño de tu mascota?</strong></p>
        <br>
        <select id="sizeDog" class="inputSelect" name="size" >
          <option value="default" selected> Indique el tamaño </option>
          <option value="Pequeño"> Pequeño</option>
          <option value="Mediano"> Mediano </option>
          <option value="Grande"> Grande </option>
        </select>
        <button id="btnCreateProfile7" class="hideButton">Siguiente</button>
      </div>
      <div id="personalityDogQuestion" class="hide questionCreatreProfile">
        <p><strong> Indica las características de la personalidad de tu perro</strong></p>
        <br>
        <p><input type="checkbox" name="personality" id="personality1" value="Dormilón"> Dormilón </p> 
        <p><input type="checkbox" name="personality" id="personality2" value="Juguetón"> Juguetón </p>
        <p><input type="checkbox" name="personality" id="personality3" value="Tranquilo"> Tranquilo </p>
        <p><input type="checkbox" name="personality" id="personality4" value="Sociable"> Sociable </p>
        <p><input type="checkbox" name="personality" id="personality5" value="Atlético"> Atlético </p>
        <p><input type="checkbox" name="personality" id="personality6" value="Solitario"> Solitario </p>
        <p><input type="checkbox" name="personality" id="personality7" value="Entusiasta"> Entusiasta </p>
        <button class="hideButton" id="btnCreateProfile8">Siguiente</button>
      </div>
      <div id="scheduleDogQuestion" class="hide questionCreatreProfile">
        <p><strong>Horarios de paseo: </strong></p>
        <br>
          <p><input type="checkbox" name="schedule" id="schedule1" value="08:00 hrs - 12:00 hrs"> 08:00 hrs - 12:00 hrs</p>
          <p><input type="checkbox" name="schedule" id="schedule2" value="12:00 hrs - 18:00 hrs"> 12:00 hrs - 18:00 hrs</p>
          <p><input type="checkbox" name="schedule" id="schedule3" value="18:00 hrs - 22:00 hrs"> 18:00 hrs - 22:00 hrs</p>
          <button class="hideButton" id="btnCreateProfile9">Siguiente</button>
      </div>
      <div id="biographyDogQuestion" class="hide questionCreatreProfile">
        <p><strong>Cúentanos un poco sobre tu perro</strong></p>
        <br>
        <textarea id="biographyDog" placeholder="Agregar pequeña biografía" rows="4" cols="50">
        <button class="hideButton" id="btnCreateProfile10">Finalizar</button>
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
        <p>Selecciona las todas las preferencias que quieras</p>
        <br>
        <p><input type='checkbox' name='sexPreference' id='femalePreference' value='Hembra'> Hembras </p>
        <p><input type='checkbox' name='sexPreference' id='malePreference' value='Macho'> Machos </p>
        <button id='btnCreateProfile12' class='hideButton'>Siguiente</button>
      </div> 
      <div id='sizePreferencesDogQuestion' class='hide questionCreatreProfile'>
        <p><strong>¿Con qué tamaño de perro prefiere estar tu mascota?</strong></p>
        <p>Selecciona las todas las preferencias que quieras</p>
        <br>
        <p><input type='checkbox' name='sizePreference' id='smallPreference' value='Pequeño'> Pequeños </p>
        <p><input type='checkbox' name='sizePreference' id='mediumPreference' value='Mediano'> Medianos </p>
        <p><input type='checkbox' name='sizePreference' id='bigPreference' value='Grande'> Grandes </p>
        <button id='btnCreateProfile13' class='hideButton' >Siguiente</button>
      </div>
      <div id='personalityPreferencesDogQuestion' class='hide questionCreatreProfile'>
        <p><strong> Indica las características de la personalidad de los perros que buscas</strong></p>
        <p>Selecciona las todas las preferencias que quieras</p>
        <br>
        <p><input type='checkbox' name='personalityPreference' id='personality1Preference' value='Dormilón'> Dormilones</p>
        <p><input type='checkbox' name='personalityPreference' id='personality2Preference' value='Juguetón'> Juguetones </p>
        <p><input type='checkbox' name='personalityPreference' id='personality3Preference' value='Tranquilo'> Tranquilos </p>
        <p><input type='checkbox' name='personalityPreference' id='personality4Preference' value='Sociable'> Sociables </p>
        <p><input type='checkbox' name='personalityPreference' id='personality5Preference' value='Atlético'> Atléticos </p>
        <p><input type='checkbox' name='personalityPreference' id='personality6Preference' value='Solitario'> Solitarios </p>
        <p><input type='checkbox' name='personalityPreference' id='personality7Preference' value='Entusiasta'> Entusiastas </p>
        <button id='btnCreateProfile14' class='hideButton' >Siguiente</button>
      </div>
      <div id='schedulePreferencesDogQuestion' class='hide questionCreatreProfile'>
        <p><strong> Indica los horarios de paseo en los que prefieras hacer amigos: </strong></p>
        <p>Selecciona las todas las preferencias que quieras</p>
        <br>
        <p><input type='checkbox' name='schedulePreference' id='schedule1Preference' value='08:00 hrs - 12:00 hrs'> 08:00 hrs - 12:00 hrs</p>
        <p><input type='checkbox' name='schedulePreference' id='schedule2Preference' value='12:00 hrs - 18:00 hrs'> 12:00 hrs - 18:00 hrs</p>
        <p><input type='checkbox' name='schedulePreference' id='schedule3Preference' value='18:00 hrs - 22:00 hrs'> 18:00 hrs - 22:00 hrs</p>
        <button id='btnCreateProfile15' class='hideButton' >Finalizar</button>
      </div>
      <div id='finishPreferencesDogQuestion' class='hide questionCreatreProfile'>
        <p class="titles"><strong>Terminaste de crear el perfil de tu perro en Barkify!!</strong></p>
        <br>
        <p>Ahora estás listo para encontrar amigos</p>
        <br>
        <a type='button' href='#/Home2' class='btnContinue' id='btnCreateProfile16'>Empezar</a>    
      </div>
    </div>
  </div>`;
  return createProfile
};
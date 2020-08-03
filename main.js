// Este es el punto de entrada de tu aplicacion

import { contentInitialPage, contentSignIn, contentHome } from './lib/index.js';
import {registerNewUser, logInUser} from './lib/firebase.js'

contentInitialPage();


// document.querySelector('#btnHomeSignIn').addEventListener('click',registerNewUser);
document.querySelector('#btnLogin').addEventListener('click',logInUser);





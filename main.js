// Este es el punto de entrada de tu aplicacion
import { contentInitialPage, contentSignIn, contentHome } from './lib/index.js';

const render = (hash) => {
  const screen = document.getElementById('screens');
  if (hash === '') {
    contentInitialPage();
  }
  if (hash === '#/SignIn') {
    screen.innerHTML = '';
    contentSignIn()
  }
  else if (hash === '#/Home') {
    screen.innerHTML = '';
    contentHome()
  }
}
const changePage = () => {
  render(window.location.hash);
}

window.addEventListener('hashchange', changePage);
window.addEventListener('load', changePage)


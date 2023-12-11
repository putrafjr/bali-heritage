import 'regenerator-runtime';
import '../styles/beranda.css';
import '../styles/kesenian.css';
import '../styles/form.css';
import '../styles/event.css';
import '../styles/about.css';
import '../styles/login.css';
import '../styles/admin.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  const urlSkip = window.location.hash;
  if (urlSkip === '#' || urlSkip === '#') {
    return;
  }
  window.scrollTo(0, 0);
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

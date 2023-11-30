import 'regenerator-runtime';
import '../styles/beranda.css';
import '../styles/kesenian.css';
import '../styles/Form.css';
// import '../styles/event.css';
// import '../styles/tentangKami.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  const urlSkip = window.location.hash;
  if (urlSkip === '#container-form-sell' || urlSkip === '#container-form-exchange') {
    return;
  }
  window.scrollTo(0, 0);
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

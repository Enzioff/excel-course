import { greeting } from './temp';
import './style.scss';

setTimeout(() => {
  document.body.innerHTML = `<h1>${greeting('Рома')}</h1>`;
}, 2000);

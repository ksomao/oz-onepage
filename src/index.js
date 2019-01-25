/*import './index.css';*/
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { hydrate, render } from 'react-dom';
import * as serviceWorker from './serviceWorker';


const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
serviceWorker.register();
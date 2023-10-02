import { render } from 'solid-js/web';

import { AppProvider } from './store';

import './index.css';
import App from './App';

render(
  () => (
    <AppProvider>
      <App />
    </AppProvider>
  ),
  document.getElementById('root'),
);

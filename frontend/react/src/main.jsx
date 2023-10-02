import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { TodoStoreProvider } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoStoreProvider>
    <App />
  </TodoStoreProvider>
);

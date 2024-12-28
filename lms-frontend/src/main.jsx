import './index.css';

import ReactDom from 'react';
import {BrowserRouter} from  'react-router-dom';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>  
    <App />
    </BrowserRouter>
  
);

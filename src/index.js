import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css'
//import App from './App';
import ProductLayout from './components/products/productLayout.jsx'

ReactDOM.render(
  <React.StrictMode>
    <ProductLayout />
  </React.StrictMode>,
  document.getElementById('root')
);


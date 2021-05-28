import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import Navigate from './route/navigate';

const App = () => (
  <BrowserRouter>
    <Navigate />
  </BrowserRouter>
);

export default App;

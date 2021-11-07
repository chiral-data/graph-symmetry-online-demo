import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'Online Demo - Symmetry Perception and Canonical SMILES for Molecules';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();

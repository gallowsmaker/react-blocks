import React from 'react';
import { render } from 'react-dom';
import Demo from './demo';

(function () {
  let container;

  container = document.createElement('div');
  container.setAttribute('id', 'container');
  document.body.appendChild(container);

  render(<Demo />, container);
})();

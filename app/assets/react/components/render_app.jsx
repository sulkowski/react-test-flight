import React from 'react';
import { render } from 'react-dom'

export default (component, {name, id, className}) => {
  let el = document.createElement('div');
  el.setAttribute('id', id || name);
  el.className = className || `app-${name}`;
  document.body.appendChild(el);
  render(component, el);
};

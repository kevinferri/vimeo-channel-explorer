import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/js/components/App';

test('renders without throwing an error', () => {
  const renderTarget = document.createElement('div');
  ReactDOM.render(<App />, renderTarget);
});

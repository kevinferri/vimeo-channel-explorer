import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../src/js/components/Header';

test('renders without throwing an error', () => {
  const renderTarget = document.createElement('div');
  ReactDOM.render(<Header title='A title' subtitle='A subtitle' />, renderTarget);
});

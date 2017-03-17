import React from 'react';
import ReactDOM from 'react-dom';
import Alert from '../../src/js/components/Alert';

test('renders without throwing an error', () => {
  const renderTarget = document.createElement('div');
  ReactDOM.render(<Alert title='A title' subtitle='A subtitle' />, renderTarget);
});

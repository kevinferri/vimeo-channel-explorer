import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../src/js/components/Button';

test('renders without throwing an error', () => {
  const renderTarget = document.createElement('div');
  ReactDOM.render(<Button type='dark' value='My Button' />, renderTarget);
});

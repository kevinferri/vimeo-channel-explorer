import React from 'react';
import ReactDOM from 'react-dom';
import Badge from '../../src/js/components/Badge';

test('renders without throwing an error', () => {
  const renderTarget = document.createElement('div');
  ReactDOM.render(<Badge type='default' text='My Badge' />, renderTarget);
});

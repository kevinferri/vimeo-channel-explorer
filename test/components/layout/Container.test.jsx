import React from 'react';
import ReactDOM from 'react-dom';
import Container from '../../../src/js/components/layout/Container';

test('renders without throwing an error', () => {
  const renderTarget = document.createElement('div');
  ReactDOM.render(<Container />, renderTarget);
});

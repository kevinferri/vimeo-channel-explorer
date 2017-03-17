import React from 'react';
import ReactDOM from 'react-dom';
import Loader from '../../src/js/components/Loader';

test('renders without throwing an error', () => {
  const renderTarget = document.createElement('div');
  ReactDOM.render(<Loader />, renderTarget);
});

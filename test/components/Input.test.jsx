import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../../src/js/components/Input';

test('renders without throwing an error', () => {
  const renderTarget = document.createElement('div');
  ReactDOM.render(<Input />, renderTarget);
});

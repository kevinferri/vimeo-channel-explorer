import React from 'react';
import ReactDOM from 'react-dom';
import FlexboxContainer from '../../../src/js/components/layout/FlexboxContainer';

test('renders without throwing an error', () => {
  const renderTarget = document.createElement('div');
  ReactDOM.render(<FlexboxContainer />, renderTarget);
});

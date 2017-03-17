import React from 'react';
import ReactDOM from 'react-dom';
import VideoCollection from '../../src/js/components/VideoCollection';

test('renders without throwing an error', () => {
  const renderTarget = document.createElement('div');
  ReactDOM.render(<VideoCollection />, renderTarget);
});

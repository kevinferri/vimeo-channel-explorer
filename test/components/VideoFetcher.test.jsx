import React from 'react';
import ReactDOM from 'react-dom';
import VideoFetcher from '../../src/js/components/VideoFetcher';

test('renders without throwing an error', () => {
  const renderTarget = document.createElement('div');
  ReactDOM.render(<VideoFetcher />, renderTarget);
});

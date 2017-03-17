import React from 'react';
import ReactDOM from 'react-dom';
import Image from '../../src/js/components/Image';

test('renders without throwing an error', () => {
  const renderTarget = document.createElement('div');
  ReactDOM.render(<Image alt='The Video' src='https://i.vimeocdn.com/video/618314884_640x360.jpg' />, renderTarget);
});

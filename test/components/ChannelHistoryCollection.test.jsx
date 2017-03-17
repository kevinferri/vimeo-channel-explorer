import React from 'react';
import ReactDOM from 'react-dom';
import ChannelHistoryCollection from '../../src/js/components/ChannelHistoryCollection';

test('renders without throwing an error', () => {
  const renderTarget = document.createElement('div');
  ReactDOM.render(<ChannelHistoryCollection />, renderTarget);
});

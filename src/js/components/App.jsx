import React, { Component } from 'react';
import Container from './layout/Container';
import FlexboxContainer from './layout/FlexboxContainer';
import Header from './Header';
import VideoFetcher from './VideoFetcher';
import VideoCollection from './VideoCollection';
import ChannelHistory from './ChannelHistoryCollection';
import '../../sass/components/App.scss';
import '../../sass/reset.scss';

/**
 * The main app component
 */
class App extends Component {
  render() {
    return (
      <main className='App'>
        <Container>
          <Header
            title='Vimeo Channel Explorer'
            subtitle='Discover videos on Vimeo through channels by searching below'
          />
          <VideoFetcher
            placeholder='Search for a Vimeo channel'
          />
          <FlexboxContainer>
            <VideoCollection />
            <ChannelHistory />
          </FlexboxContainer>
        </Container>
      </main>
    );
  }
}

export default App;

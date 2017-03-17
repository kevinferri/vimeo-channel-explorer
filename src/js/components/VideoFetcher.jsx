import React, { Component } from 'react';
import VideoStore from '../stores/VideoStore';
import ReloadVideos from '../actions/VideoActions';
import Input from './Input';
import '../../sass/components/VideoFetcher.scss';

/**
 * A search component that can fetch videos from the Vimeo API when given a channel name
 */
class VideoFetcher extends Component {

  constructor(props) {
    super(props);
    this.state = {
      channel: '',
      channelHasChangedSinceLastReload: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillMount() {
    VideoStore.on('change', () => {
      if (!VideoStore.isFetching) {
        this.setState({
          channel: VideoStore.channel,
        });
      }
    });
  }

  handleChange(event) {
    this.setState({
      channel: event.target.value,
      channelHasChangedSinceLastReload: true,
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      if (this.state.channel.trim().length > 0 && this.state.channelHasChangedSinceLastReload) {
        ReloadVideos(this.state.channel.replace(/ /g, '').toLowerCase());
        this.setState({ channelHasChangedSinceLastReload: false });
      }
    }
  }

  render() {
    return (
      <div className='VideoFetcher'>
        <Input
          className='Input Input--full-width'
          type='text'
          value={ this.state.channel }
          placeholder='Search for a Vimeo Channel'
          onChange={ this.handleChange }
          onKeyPress={ this.handleKeyPress }
          name='channel'
        />
      </div>
    );
  }
}

export default VideoFetcher;

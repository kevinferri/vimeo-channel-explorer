import React, { Component } from 'react';
import VideoStore from '../stores/VideoStore';
import Video from './Video';
import Loader from './Loader';
import Alert from './Alert';
import '../../sass/components/VideoCollection.scss';

/**
 * A list of video components
 */
class VideoCollection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: VideoStore.getAll(),
      isFetching: VideoStore.isFetching,
      errorMessage: VideoStore.errorMessage,
      hasFetchedAtLeastOnce: false,
      channel: null,
    };
    this.reloadVideos = this.reloadVideos.bind(this);
  }

  componentWillMount() {
    VideoStore.on('change', this.reloadVideos);
  }

  componentWillUnmount() {
    VideoStore.removeListener('change', this.reloadVideos);
  }

  reloadVideos() {
    this.setState({
      videos: VideoStore.getAll(),
      isFetching: VideoStore.isFetching,
      errorMessage: VideoStore.errorMessage,
      hasFetchedAtLeastOnce: true,
      channel: VideoStore.channel,
    });
  }

  render() {
    const videoCollection = this.state.videos.map(video => (
      <Video
        name={ video.name }
        key={ video.uri }
        description={ video.description }
        link={ video.link }
        image={ video.pictures.sizes[video.pictures.sizes.length - 1].link }
        userName={ video.user.name }
        userImage={ video.user.pictures ? video.user.pictures.sizes[video.user.pictures.sizes.length - 1].link : 'http://res.cloudinary.com/ddgmo0hxj/image/upload/v1489675730/vimeo_icon_white_on_blue_smuvgi.png' }
        userLink={ video.user.link }
        userAccountType={ video.user.account }
        embedHtml={ video.embed.html }
      />
    ));
    return (
      <div className='VideoCollection'>
        {
          this.state.channel && !this.state.isFetching
          && !this.state.errorMessage && this.state.videos.length > 0 ?
            <Alert
              type='success'
              message={ `Showing ${this.state.videos.length} videos from the ${this.state.channel.replace(/ /g, '')} channel` }
              dismissable
            />
            : null
        }
        { this.state.isFetching && !this.state.errorMessage ? <Loader resource='videos' /> : null }
        {
          !this.state.isFetching && !this.state.errorMessage && this.state.videos.length > 0 ?
            <ul className='VideoCollection__video-list'>{ videoCollection }</ul> : null
        }
        {
          this.state.errorMessage ?
            <Alert message={ `${this.state.errorMessage} when searching the channel ${this.state.channel}` } dismissable type='error' /> : null
        }
        {
          this.state.hasFetchedAtLeastOnce && !this.state.isFetching &&
          videoCollection.length < 1 && !this.state.errorMessage ?
            <Alert message={ `No videos found when searching the channel ${this.state.channel}` } dismissable type='warning' /> : null
        }
      </div>
    );
  }
}

export default VideoCollection;

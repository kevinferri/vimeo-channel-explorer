import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';

/**
 * The store for video components
 */
class VideoStore extends EventEmitter {
  constructor() {
    super();
    this.videos = [];
    this.isFetching = false;
    this.errorMessage = null;
    this.channel = null;
  }

  getAll() {
    return this.videos;
  }

  handleActions(action) {
    if (action.type === 'RECEIVE_VIDEOS') {
      this.videos = action.data.videos;
      this.channel = action.data.channel;
      this.isFetching = false;
      this.errorMessage = null;
      this.emit('change');
    } else if (action.type === 'FETCH_VIDEOS') {
      this.isFetching = true;
      this.errorMessage = null;
      this.emit('change');
    } else if (action.type === 'RECEIVE_VIDEOS_ERROR') {
      this.errorMessage = action.data.errorMessage;
      this.channel = action.data.channel;
      this.isFetching = false;
      this.emit('change');
    }
  }
}

const videoStore = new VideoStore();
Dispatcher.register(videoStore.handleActions.bind(videoStore));
export default videoStore;

import Dispatcher from '../dispatcher';
import config from '../../../config';

const apiConfig = config[process.env.NODE_ENV];
const cache = {};

/**
 * Handles the logic for dispatching actions when reloading videos
 * @param {string} channel
 */
export default function reloadVideos(channel) {
  // If the channel was searched already, we already dispatched an action for it
  // and can look it up and dispatch the same action so we don't have to fetch from the API
  if (cache[channel]) {
    Dispatcher.dispatch(cache[channel]);
  } else {
    // If this is a new channel, fetch the response from the Vimeo API and store the correct
    // action in the cache so we can dispatch from there if they search the channel again
    const fields = 'uri,link,name,description,pictures.sizes.link,embed.html,user.name,user.account,user.link,user.pictures.sizes.link';
    Dispatcher.dispatch({
      type: 'FETCH_VIDEOS',
      channel,
    });
    fetch(`${apiConfig.vimeoApiUrl}channels/${channel.replace(/ /g, '')}/videos?access_token=${apiConfig.vimeoAccessToken}&fields=${fields}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 404) {
        throw new Error('Channel not found');
      }
      throw new Error('There was an error while fetching from the Vimeo API');
    })
    .then((responseJson) => {
      const dispatchAction = { type: 'RECEIVE_VIDEOS', data: { videos: responseJson.data, channel } };
      Dispatcher.dispatch(dispatchAction);
      cache[channel] = dispatchAction;
    })
    .catch((error) => {
      const errorMessage = error.toString();
      const dispatchAction = { type: 'RECEIVE_VIDEOS_ERROR', data: { errorMessage, channel } };
      Dispatcher.dispatch(dispatchAction);
      cache[channel] = dispatchAction;
    });
  }
}

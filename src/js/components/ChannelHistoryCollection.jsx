import React, { Component } from 'react';
import _ from 'lodash';
import VideoStore from '../stores/VideoStore';
import ReloadVideos from '../actions/VideoActions';
import Button from '../components/Button';
import '../../sass/components/ChannelHistoryCollection.scss';

/**
 * A component that stores recent channel searches
 * Clicking on one of the recent searches will update the view for that channel
 */
class ChannelHistoryCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
    };
    this.getMostRecentSearchItem = this.getMostRecentSearchItem.bind(this);
    this.handleHistoryItemClick = (event) => {
      ReloadVideos(event.target.textContent);
    };
  }

  componentWillMount() {
    VideoStore.on('change', this.getMostRecentSearchItem);
  }

  componentWillUnmount() {
    VideoStore.removeListener('change', this.getMostRecentSearchItem);
  }

  getMostRecentSearchItem() {
    if (!VideoStore.isFetching) {
      const history = this.state.history;
      const channel = VideoStore.channel;
      if (!_.includes(history, channel.replace(/ /g, '').toLowerCase()) || history.length === 0) {
        if (!VideoStore.errorMessage) {
          history.push(channel);
          this.setState({ channel });
        }
      }
    }
  }

  render() {
    const historyCollection = this.state.history.map(historyItem => (
      <li key={ historyItem } className='ChannelHistoryCollection__list-item'>
        <Button
          onClick={ this.handleHistoryItemClick }
          type='dark'
          value={ historyItem }
        />
      </li>
    ));
    return (
      <aside className='ChannelHistoryCollection'>
        <h4 className='ChannelHistoryCollection__title'>Search History</h4>
        {
          this.state.history.length === 0 ?
            <small className='ChannelHistoryCollection__warning'>No searches yet</small> :
            <ul className='ChannelHistoryCollection__list'>
              { historyCollection }
            </ul>
        }
      </aside>
    );
  }
}

export default ChannelHistoryCollection;

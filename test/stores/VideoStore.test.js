import _ from 'lodash';

import VideoStore from '../../src/js/stores/VideoStore';

const newVideos = [
  {
    name: 'bike lanes',
    description: 'like me on facebook https://www.facebook.com/cneistat i got a tickets for not riding my bike in a bike lane',
    link: 'https://vimeo.com/25037336',
    image: 'https://i.vimeocdn.com/video/164550203_1280x960.jpg?r=pad',
    userName: 'Casey Neistat',
    userImage: 'https://i.vimeocdn.com/portrait/2384300_300x300?r=pad',
    userLink: 'https://vimeo.com/caseyneistat',
    userAccountType: 'plus',
    embedHtml: '<iframe src="https://player.vimeo.com/video/25037336?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0" width="1280" height="720" frameborder="0" title="bike lanes" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
  },
  {
    name: 'Star Wars: Retold (by someone who hasn’t seen it)',
    description: 'My friend Amanda had never seen a whole Star Wars film',
    link: 'https://vimeo.com/2809991',
    image: 'https://i.vimeocdn.com/video/418975200_960x540.jpg?r=pad',
    userName: 'Joe Nicolosi',
    userImage: 'https://i.vimeocdn.com/portrait/14369149_300x300?r=pad',
    userLink: 'https://vimeo.com/jnico',
    userAccountType: 'pro',
    embedHtml: '<iframe src="https://player.vimeo.com/video/2809991?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0" width="640" height="360" frameborder="0" title="Star Wars: Retold (by someone who hasn&#039;t seen it)" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
  },
  {
    name: 'Fears',
    description: 'some desc',
    link: 'https://vimeo.com/126060304',
    image: 'https://i.vimeocdn.com/video/516372173_1280x720.jpg?r=pad',
    userName: 'Nata Metlukh',
    userImage: 'https://i.vimeocdn.com/portrait/2384300_300x300?r=pad',
    userLink: 'https://vimeo.com/caseyneistat',
    userAccountType: 'plus',
    embedHtml: '<iframe src="https://player.vimeo.com/video/126060304?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0" width="1920" height="1080" frameborder="0" title="Fears" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
  },
];


beforeAll(() => {
  VideoStore.videos = newVideos;
});

describe('#getAll()', () => {
  test('it gets the right amount of videos', () => {
    expect(newVideos.length).toBe(VideoStore.getAll().length);
  });

  test('it gets all the videos with the correct data', () => {
    expect(_.isEqual(newVideos, VideoStore.getAll())).toBe(true);
  });
});

describe('#handleActions()', () => {
  test('it updates the correct state when receving an action of type RECEIVE_VIDEOS', () => {
    const mockFetchedVideoArray = [newVideos[0]];
    const channel = 'staffpicks';
    VideoStore.handleActions({ type: 'RECEIVE_VIDEOS', data: { videos: mockFetchedVideoArray, channel } });
    expect(_.isEqual(VideoStore.videos, mockFetchedVideoArray)).toBe(true);
    expect(VideoStore.isFetching).toBe(false);
    expect(VideoStore.channel).toBe(channel);
  });

  test('it updates the correct state when receving an action of type FETCH_VIDEOS', () => {
    const channel = 'staffpicks';
    VideoStore.handleActions({ type: 'FETCH_VIDEOS', channel });
    expect(VideoStore.isFetching).toBe(true);
    expect(VideoStore.errorMessage).toBe(null);
  });

  test('it updates the correct state when receving an action of type RECEIVE_VIDEOS_ERROR', () => {
    const errorMessage = 'There was a problem fetching from Vimeo';
    const channel = 'foobarbazbiz';
    VideoStore.handleActions({ type: 'RECEIVE_VIDEOS_ERROR', data: { errorMessage, channel } });
    expect(VideoStore.isFetching).toBe(false);
    expect(VideoStore.errorMessage).toBe(errorMessage);
    expect(VideoStore.channel).toBe(channel);
  });
});

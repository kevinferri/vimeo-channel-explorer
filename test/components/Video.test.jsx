import React from 'react';
import ReactDOM from 'react-dom';
import Video from '../../src/js/components/Video';

test('renders without throwing an error', () => {
  const renderTarget = document.createElement('div');
  ReactDOM.render(<Video
    name='The Video Title'
    image='https://i.vimeocdn.com/video/490832838_1920x1080.jpg?r=pad'
    link='https://vimeo.com/207217234'
    userName='Kevin Ferri'
    userLink='https://vimeo.com/user63981510'
    userImage='https://secure.gravatar.com/avatar/7dcdc0de4041f43655a71d1e6904bfaf?d=https%3A%2F%2Fi.vimeocdn.com%2Fportrait%2Fdefaults-blue_600x600.png&s=600'
    userAccountType='basic'
    embedHtml='<iframe src="https://player.vimeo.com/video/158344086?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0" width="1920" height="1080" frameborder="0" title="Lonely and Horny" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
  />,
  renderTarget);
});

import React, { Component } from 'react';
import '../../sass/components/Video.scss';
import Image from './Image';
import Badge from './Badge';
import Input from './Input';
import Button from './Button';

/**
 * Displays data from a Vimeo video
 * @prop {string} name (required)
 * @prop {string} link (required)
 * @prop {string} description (optional)
 * @prop {string} image (required)
 * @prop {string} userName (required)
 * @prop {string} userImage (required)
 * @prop {string} userLink (required)
 * @prop {string} userAccountType (required)
 * @prop {string} embedHtml (optional)
 */
class Video extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shareIsOpen: false,
    };
    this.handleShareClick = this.handleShareClick.bind(this);
    this.highlightInputValue = this.highlightInputValue.bind(this);
  }

  handleShareClick() {
    this.setState({
      shareIsOpen: !this.state.shareIsOpen,
    });
  }

  highlightInputValue(event) {
    event.target.select(this);
  }

  render() {
    return (
      <li className='Video'>
        <a
          href={ this.props.link }
          rel='noopener noreferrer'
          target='_blank'
        >
          <Image
            className='Image Image--responsive'
            alt={ this.props.name }
            src={ this.props.image }
          />
        </a>
        <div className='Video__video-content'>
          <div className='Video__video-credit'>
            <a
              href={ this.props.userLink }
              rel='noopener noreferrer'
              target='_blank'
            >
              <Image
                className='Image Image--circle Image--shadow Image--inline Image--medium-square'
                src={ this.props.userImage }
                alt={ this.props.userName }
              />
            </a>
            <a
              className='Video__video-name'
              href={ this.props.link }
              rel='noopener noreferrer'
              target='_blank'
            >
              { this.props.name }
            </a>
            <small className='Video__video-caption'>
              from <a
                className='Video__video-credit-link'
                rel='noopener noreferrer'
                target='_blank'
                href={ this.props.userLink }
              >
                { this.props.userName }
              </a>
            </small>
            {
              this.props.userAccountType !== 'basic' ?
                <Badge
                  link={ `https://vimeo.com/${this.props.userAccountType}` }
                  text={ this.props.userAccountType }
                  type={ this.props.userAccountType }
                />
            : null
            }
          </div>
          <p className='Video__video-data-text'>{ this.props.description }</p>
          <div
            className={ this.state.shareIsOpen ?
              'Video__video-share-information Video__video-share-information--open' :
              'Video__video-share-information'
            }
          >
            <span className='Video__video-share-label'>Link</span>
            <Input
              className='Input Input--full-width Video__video-share-selection'
              defaultValue={ this.props.link }
              onFocus={ this.highlightInputValue }
            />
            <span className='Video__video-share-label'>Embed</span>
            <Input
              className='Input Input--full-width Video__video-share-selection'
              defaultValue={ this.props.embedHtml }
              onFocus={ this.highlightInputValue }
            />
          </div>
          <Button
            onClick={ this.handleShareClick }
            value={ this.state.shareIsOpen ? 'Hide Share Information' : 'Show Share Information' }
          />
        </div>
      </li>
    );
  }
}

Video.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  link: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  userName: React.PropTypes.string.isRequired,
  userImage: React.PropTypes.string.isRequired,
  userLink: React.PropTypes.string.isRequired,
  userAccountType: React.PropTypes.string.isRequired,
  embedHtml: React.PropTypes.string,
};

Video.defaultProps = {
  description: '',
  embedHtml: '',
};

export default Video;

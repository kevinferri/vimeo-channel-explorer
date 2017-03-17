import React, { Component } from 'react';
import '../../sass/components/Image.scss';

/**
 * A generic image component
 * @prop {string} alt (required)
 * @prop {string} src (required)
 */
class Image extends Component {
  render() {
    return (
      <img
        className='Image'
        alt={ this.props.alt }
        src={ this.props.src }
        { ...this.props }
      />
    );
  }
}

Image.propTypes = {
  alt: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired,
};


export default Image;

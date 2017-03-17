import React, { Component } from 'react';
import '../../sass/components/Header.scss';

/**
 * A header block component
 * @prop {string} title (required)
 * @prop {string} subtitle (required)
 */
class Header extends Component {
  render() {
    return (
      <header className='Header Header--center'>
        <h1 className='Header__title'>
          { this.props.title }
        </h1>
        <p className='Header__subtitle'>
          { this.props.subtitle }
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired,
};

export default Header;

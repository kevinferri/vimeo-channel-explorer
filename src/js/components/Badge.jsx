import React, { Component } from 'react';
import '../../sass/components/Badge.scss';

/**
 * A badge component
 * @prop {string} text (required)
 * @prop {string} type (optional)
 * @prop {string} link (optional)
 */
class Badge extends Component {
  render() {
    return (
      <a
        href={ this.props.link }
        className={ this.props.type ? `Badge Badge--${this.props.type}` : 'Badge' }
        rel='noopener noreferrer'
        target='_blank'
      >
        { this.props.text }
      </a>
    );
  }
}

Badge.propTypes = {
  text: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  link: React.PropTypes.string,
};

Badge.defaultProps = {
  link: '#',
  type: 'default',
};

export default Badge;

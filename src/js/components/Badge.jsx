import React, { Component } from 'react';
import '../../sass/components/Badge.scss';

/**
 * A badge component
 * @prop {string} text (required)
 * @prop {string} type (required)
 * @prop {string} link (optional)
 */
class Badge extends Component {
  render() {
    return (
      <a
        href={ this.props.link }
        className={ `Badge Badge--${this.props.type}` }
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
  type: React.PropTypes.string.isRequired,
  link: React.PropTypes.string,
};

Badge.defaultProps = {
  link: '#',
};

export default Badge;

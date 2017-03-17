import React, { Component } from 'react';
import '../../sass/components/Button.scss';

/**
 * A generic button component
 * @prop {string} type (optional) -- options are default and dark
 * @prop {function} onClick (optional)
 */
class Button extends Component {
  render() {
    return (
      <button
        className={ this.props.type ? `Button Button--${this.props.type}` : 'Button' }
        onClick={ this.props.onClick }
        { ...this.props }
      >
        { this.props.value }
      </button>
    );
  }
}

Button.propTypes = {
  value: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

Button.defaultProps = {
  type: 'default',
  onClick: () => {},
};

export default Button;

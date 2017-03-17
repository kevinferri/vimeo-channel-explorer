import React, { Component } from 'react';
import '../../sass/components/Input.scss';

/**
 * A generic input component
 * @prop {function} onChange (optional)
 * @prop {function} onKeyPress (optional)
 * @prop {function} onFocus (optional)
 */
class Input extends Component {
  render() {
    return (
      <input
        className='Input'
        onChange={ this.props.onChange }
        onKeyPress={ this.props.onKeyPress }
        onFocus={ this.props.onFocus }
        { ...this.props }
      />
    );
  }
}

Input.propTypes = {
  onChange: React.PropTypes.func,
  onKeyPress: React.PropTypes.func,
  onFocus: React.PropTypes.func,
};

Input.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  onFocus: () => {},
};

export default Input;

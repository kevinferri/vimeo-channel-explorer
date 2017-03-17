import React, { Component } from 'react';
import '../../../sass/components/layout/FlexboxContainer.scss';

/**
 * A flexbox container component
 * @prop {array} children (optional)
 * @prop {bool} fullHeight (optional)
 */
class FlexboxContainer extends Component {
  render() {
    return (
      <div className='FlexboxContainer'>
        { this.props.children }
      </div>
    );
  }
}

FlexboxContainer.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element),
};

FlexboxContainer.defaultProps = {
  children: [],
};


export default FlexboxContainer;

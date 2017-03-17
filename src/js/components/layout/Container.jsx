import React, { Component } from 'react';
import '../../../sass/components/layout/Container.scss';

/**
 * A container block component
 * @prop {array} children (optional)
 */
class Container extends Component {
  render() {
    return (
      <div className='Container'>
        { this.props.children }
      </div>
    );
  }
}

Container.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element),
};

Container.defaultProps = {
  children: [],
};


export default Container;

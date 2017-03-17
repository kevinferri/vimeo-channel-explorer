import React, { Component } from 'react';
import '../../sass/components/Loader.scss';

/**
 * A loader component used to indicate to the the user when data is being fetched
 * @prop {string} resource (optional)
 */
class Loader extends Component {
  render() {
    return (
      <div className='Loader'>
        <div className='Loader__spinner' />
        <p className='Loader__loading-text'>Loading { this.props.resource }</p>
      </div>
    );
  }
}

Loader.propTypes = {
  resource: React.PropTypes.string,
};

Loader.defaultProps = {
  resource: '',
};


export default Loader;

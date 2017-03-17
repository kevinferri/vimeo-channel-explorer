import React, { Component } from 'react';
import '../../sass/components/Alert.scss';

/**
 * An alert component
 * @prop {string} message (optional)
 * @prop {string} type (optional) -- options are default, success, error, warning
 * @prop {bool} dismissable (optional)
 */
class Alert extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isClosed: false,
    };
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleCloseClick() {
    this.setState({ isClosed: !this.state.isClosed });
  }

  render() {
    return (
      <div className={ this.state.isClosed ? `Alert Alert--${this.props.type} Alert--closed` : `Alert Alert--${this.props.type}` }>
        <p className='Alert__message'>{ this.props.message }</p>
        {
          this.props.dismissable ?
            <button
              onClick={ this.handleCloseClick }
              className={ `Alert__close-icon Alert__close-icon--${this.props.type}` }
            >
              X
            </button>
          : null
        }
      </div>
    );
  }
}

Alert.propTypes = {
  message: React.PropTypes.string,
  type: React.PropTypes.string,
  dismissable: React.PropTypes.bool,
};

Alert.defaultProps = {
  message: '',
  dismissable: false,
  type: 'default',
};


export default Alert;

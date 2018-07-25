import React from 'react';
import PropTypes from 'prop-types';

const SCRIPT_PROP_TYPES = [
  'async',
  'charset',
  'crossOrigin',
  'defer',
  'src',
  'text',
  'type',
  'integrity',
  'nomodule',
  'nonce',
];

class Script extends React.Component {
  state = { loaded: false, error: false };
  onLoad = e => {
    this.setState({ loaded: true, error: false });
    this.props.onLoad(e);
  };
  onError = e => {
    this.setState({ loaded: false, error: true });
    this.props.onError(e);
  };
  componentDidMount() {
    const exists = !!document.querySelector(`script[src="${this.props.src}"]`);
    if (exists) return this.onLoad();
    const script = document.createElement('script');
    Object.keys(this.props).forEach(k => {
      if (SCRIPT_PROP_TYPES.includes(k)) script[k] = this.props[k];
    });
    script.addEventListener('load', this.onLoad);
    script.addEventListener('error', this.onError);
    document.getElementsByTagName('head')[0].appendChild(script);
  }
  render() {
    return this.props.children({ ...this.state });
  }
}

Script.defaultProps = {
  async: true,
  type: 'text/javascript',
  onLoad: e => null,
  onError: e => null,
};
Script.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Script;

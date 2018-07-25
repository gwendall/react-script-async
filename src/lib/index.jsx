import React from 'react';

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

const DEFAULT_PROPS = {
  async: true,
  type: 'text/javascript',
};

class Script extends React.Component {
  static defaultProps = DEFAULT_PROPS;
  state = { success: false, error: false };
  onSuccess = () => this.setState({ success: true, error: false });
  onError = () => this.setState({ success: false, error: true });
  componentDidMount() {
    const { src } = this.props;
    if (!src) console.log('Please provide a prop src to <Script />');
    const exists = !!document.querySelector(`script[src="${src}"]`);
    if (exists) return this.setState({ success: true, error: false });
    const script = document.createElement('script');
    Object.keys(this.props).forEach(k => {
      if (SCRIPT_PROP_TYPES.includes(k)) script[k] = this.props[k];
    });
    script.addEventListener('load', this.onSuccess);
    script.addEventListener('error', this.onError);
    document.body.appendChild(script);
  }
  render() {
    return this.props.children({ ...this.state });
  }
}

export default Script;

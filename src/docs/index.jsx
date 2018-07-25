import React from 'react';
import { render } from 'react-dom';
import Script from '../../lib';
import './styles.css';

function Demo() {
  return (
    <div>
      <h1>React Script Async</h1>
      <Script src="some_script.js">
        {({ success }) => (success ? <div>hurray !</div> : <div>Loading...</div>)}
      </Script>
    </div>
  );
}

render(<Demo />, document.getElementById('app'));

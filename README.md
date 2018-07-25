# React Script Async

A dead simple way to load `<script />` tags through render props.

# Installation

```shell
npm install react-script-async
```

or

```shell
yarn add react-script-async
```

# How it works

This library uses a render prop to render certain elements whether your script is loaded or not. All the props you usually would pass to a regular `<script />` tag are passed through.

```javascript
import React from 'react';
import Script from 'react-script-async';

export default () => (
  <Script src="some_script.js">
    {({ loaded }) => (loaded ? <div>hurray !</div> : <div>Loading...</div>)}
  </Script>
);
```

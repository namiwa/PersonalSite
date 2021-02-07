import React from 'react';
import App from '../components/app';
import * as serviceWorker from './serviceWorker';

const IndexPage = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default IndexPage;

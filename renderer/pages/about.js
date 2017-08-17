import React from 'react';
import Nav from '../components/Nav';

export default ({ url }) => (
  <div>
    <Nav pathname={url.pathname} />

    <h1>About</h1>
  </div>
);

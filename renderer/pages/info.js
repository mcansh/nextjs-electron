import React from 'react';
import Nav from '../components/Nav';

const { node, chrome, electron } = process.versions;

const Info = ({ url }) => (
  <div>
    <Nav pathname={url.pathname} />
    <p>We are using Node.js {node}, Chromium {chrome}, and Electron {electron}.</p>
  </div>
);

export default Info;

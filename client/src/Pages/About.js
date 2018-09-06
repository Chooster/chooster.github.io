import React from 'react';

import Colors from '../Assets/Colors';

export default () => {
  return (
    <div className="" style={{ backgroundColor: Colors.dark }}>
      <h1 id="page-title" style={{ color: 'white' }}>
        About Me
      </h1>
      <p id="page-info" style={{ color: 'white' }}>
        My name is Jake Cooley and I live in the San Francisco Bay Area. am
        currently seeking a position as a Full Stack Developer.
      </p>
    </div>
  );
};

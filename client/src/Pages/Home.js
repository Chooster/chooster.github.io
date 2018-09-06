import React from 'react';
import { Avatar } from '@material-ui/core';

import Ideas from '../Components/Ideas';

import portrait from '../Assets/Images/portrait.jpg';
import Colors from '../Assets/Colors';

export default () => {
  return (
    <div className="Home">
      <p id="name-desc" style={{ color: '#333333' }}>
        Jake Cooley
      </p>
      <p id="lower-desc" style={{ color: Colors.gray }}>
        Full-Stack Web Developer
      </p>
      <Avatar
        style={{ height: 300, width: 300, margin: '0 auto' }}
        src={portrait}
        alt="Jake Cooley"
      />
      <Ideas />
    </div>
  );
};

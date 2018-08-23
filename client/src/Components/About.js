import React from 'react';
import { Image, Well } from 'react-bootstrap';
import portrait from '../Assets/Images/portrait.jpg';

export default () => {
  return (
    <div className="page-wrapper">
      <h1 id="page-title">About Me</h1>
      <Image
        src={portrait}
        style={{
          margin: '0 auto',
          borderColor: 'black',
          height: '20%',
          width: '20%'
        }}
        thumbnail
        responsive
      />
      <Well className="Info-container">
        <p id="page-info">
          My name is Jake Cooley and I live in the San Francisco Bay Area. am
          currently seeking a position as a Full Stack Developer.
        </p>
      </Well>
    </div>
  );
};

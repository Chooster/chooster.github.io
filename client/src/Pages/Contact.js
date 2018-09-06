import React from 'react';
import FontAwesome from 'react-fontawesome';

import Colors from '../Assets/Colors';

export default () => {
  return (
    <div
      className="page-wrapper contact-wrapper"
      style={{ backgroundColor: Colors.dark }}
    >
      <a
        href="https://www.github.com/chooster"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesome
          className="icon"
          name="github-square"
          size="2x"
          style={{ color: Colors.yellow }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/jake-cooley-576977b1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesome
          className="icon"
          name="linkedin-square"
          size="2x"
          style={{ color: Colors.yellow }}
        />
      </a>
      <a href="mailto:jakeacooley@gmail.com">
        <FontAwesome
          className="icon"
          name="envelope-square"
          size="2x"
          style={{ color: Colors.yellow }}
        />
      </a>
    </div>
  );
};

import React from 'react';

import Colors from '../Assets/Colors';

export default () => {
  return (
    <div className="Ideas-container">
      <h2 id="page-title" className="Ideas-text" style={{ color: Colors.dark }}>
        {'I turn '}
        <span style={{ color: Colors.yellow }}>{'{'}</span>
        <strong>{' ideas '}</strong>
        <span style={{ color: Colors.yellow }}>{'}'}</span>
        {' into '}
        <span style={{ color: Colors.yellow }}>{'<'}</span>
        <strong>{' products '}</strong>
        <span style={{ color: Colors.yellow }}>{'/>'}</span>
        {'.'}
      </h2>
    </div>
  );
};

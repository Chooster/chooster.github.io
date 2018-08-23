import React from 'react';

export default () => {
  return (
    <div className="Ideas-container">
      <img src="https://png.icons8.com/color/50/000000/idea.png" />
      <img src="https://png.icons8.com/color/50/000000/right-down2.png" />
      <div style={{}}>
        <img src="https://png.icons8.com/color/50/000000/filled-filter.png" />
      </div>
      <img src="https://png.icons8.com/color/50/000000/down-right.png" />
      <img src="https://png.icons8.com/color/50/000000/template.png" />
      <h2 id="page-title" style={{ color: 'rgb(63,81,181)' }}>
        I turn <span style={{ color: 'rgb(255,152,0)' }}>{'['}</span>
        {' ideas '}
        <span style={{ color: 'rgb(255,152,0)' }}>{']'}</span>
        {' into '}
        <span style={{ color: 'rgb(255,152,0)' }}>{'{'}</span>
        {' products '}
        <span style={{ color: 'rgb(255,152,0)' }}>{'}'}</span>
      </h2>
    </div>
  );
};

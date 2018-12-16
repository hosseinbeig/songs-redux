import React from 'react';
import SongList from './SongList';

const App = () => {
  return (
    <div>
      <div className="ui container placeholder">
        <div className="full line" />
        <div className="very long line" />
        <div className="long line" />
        <div className="medium line" />
        <div className="short line" />
        <div className="very short line" />
      </div>

      <h2 className="ui container header">
        <i className="headphones icon" />
        <div className="content">Pick Your Song</div>

        <a className="ui orange tag label">
          Persian <i style={{ paddingLeft: '10px' }} i className="ir flag" />
        </a>
      </h2>
      <div className="ui container placeholder">
        <div className="medium line" />
      </div>
      <br />
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

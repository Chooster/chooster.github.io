import React, { Component } from 'react';
import * as Pages from './Pages';

import Nav from './Components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section id="home">
          <Nav />
          <span>
            <Pages.Home />
            {/* <Pages.Blogs /> */}
          </span>
        </section>
        <section id="about">
          <span>
            <Pages.About />
          </span>
        </section>
        <section id="portfolio">
          <Pages.Portfolio />
        </section>
        <section id="contact">
          <Pages.Contact />
        </section>
      </div>
    );
  }
}

export default App;

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Entertainment extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Entertainment</h1>
            </header>
            NOTE: This is NOT an endorsement of the travel services advertised. I simply found that these commercials summarize what Ruby on Racetracks is about.

            <h2>Holiday Inn</h2>
            The best surprise is no surprise.
            <br />
            <iframe width="420" height="315" src="https://www.youtube.com/embed/WNh5uY1ePcA"></iframe>

            <h2>Not Exactly Hertz</h2>
            The “Not Exactly Hertz” commercials inspired my slogan for Ruby on Racetracks.
            <ul>
              <li><a href="https://www.adforum.com/creative-work/ad/player/28426/johnson/hertz">Johnson</a>: Is he buying it?  Not exactly.</li>
              <li><a href="https://www.adforum.com/creative-work/ad/player/28423/boss/hertz">Boss</a>: Still counting on that promotion?  Not exactly.</li>
              <li><a href="https://www.adforum.com/creative-work/ad/player/28425/horserace/hertz">Horserace</a>: The executives are at the gate . . . .</li>
              <li>Vacation: Honey, this is not exactly Hertz, OK?</li>
            </ul>
            <iframe width="420" height="315" src="https://www.youtube.com/embed/OmLtaJjfz2Y"></iframe>
            <ul>
              <li>Jeff Dunham: So you still think I’m the dummy?</li>
            </ul>
            <iframe width="420" height="315" src="https://www.youtube.com/embed/EuOHHA0KTww"></iframe>

          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Entertainment;

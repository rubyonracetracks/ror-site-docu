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

class Help extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Help</h1>
            </header>

            <h2><a href="prerequisites.html">Prerequisites</a></h2>

            <h2>Discuss</h2>
            <ul>
              <li><a href='https://groups.google.com/forum/#!forum/ruby_on_racetracks'>Google Group</a></li>
              <li><a href='https://twitter.com/RubyRacetracks'>Twitter</a></li>
            </ul>
            <h2>Email</h2>
            <img src='../img/email.jpg'/>

          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;

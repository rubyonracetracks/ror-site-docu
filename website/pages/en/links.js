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

class Links extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Affiliated Sites</h1>
            </header>
            <ul>
              <li><a href="https://www.virtualboxtutorial.com/">VirtualBox Tutorial</a></li>
              <li><a href="https://www.differentdockertutorial.com/">Different Docker Tutorial</a></li>
              <li><a href="https://www.railsneutrino.com/">Rails Neutrino</a></li>
              <li><a href="https://www.genericapp.net/">Generic App</a></li>
              <li><a href="https://www.legacyrailsapps.com/">Legacy Rails Apps</a></li>
            </ul>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Links;

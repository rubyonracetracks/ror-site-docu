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

class Gitpages extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Git Repositories</h1>
            </header>
            <h2><a href="https://github.com/rubyonracetracks">GitHub</a></h2>
            <h2><a href="https://bitbucket.org/rubyonracetracks/">BitBucket</a></h2>
            <h2><a href="https://gitlab.com/rubyonracetracks/">GitLab</a></h2>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Gitpages;

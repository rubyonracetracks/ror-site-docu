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

class Prerequisites extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Prerequisites</h1>
            </header>
            It is assumed here that you are familiar with the basics of Ruby, Rails, Docusaurus, Gatsby, and other technologies discussed here.  If you are not, here are some links to basic tutorials.

            <h2>Ruby</h2>
              <ul>
                <li><a href='https://learnrubythehardway.org/'>Learn Ruby the Hard Way</a></li>
              </ul>
            
            <h2>Creating Ruby Gems</h2>
              <ul>
                <li><a href="http://guides.rubygems.org/make-your-own-gem/">Make Your Own Gem</a></li>
                <li><a href="http://rakeroutes.com/blog/lets-write-a-gem-part-one/">Let’s Write a Gem: Part 1</a></li>
                <li><a href="http://rakeroutes.com/blog/lets-write-a-gem-part-two/">Let’s Write a Gem: Part 2</a></li>
              </ul>
            
            <h2>Rails</h2>
              <ul>
                <li><a href="http://railsforzombies.org/">Rails For Zombies</a>: This is a great introduction to what Rails can do. No installation of Ruby or Rails is required. Go through Rails For Zombies before going through Rails Tutorial, RailsBridge, or other tutorial sites.</li>
                <li><a href="https://www.railstutorial.org/">Rails Tutorial</a>: If you are new to Ruby on Rails, use the recommended free <a href="https://c9.io/">Cloud 9</a> account for Rails Tutorial.</li>
                <li><a href="http://www.railsbridge.org/">RailsBridge</a></li>
              </ul>
            <h2>JavaScript</h2>
              <ul>
                <li><a href="https://docusaurus.io/en/">Docusaurus</a></li>
                <li><a href="https://www.gatsbyjs.org/">Gatsby</a></li>
                <li><a href="https://reactjs.org/">React</a></li>
              </ul>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Prerequisites;

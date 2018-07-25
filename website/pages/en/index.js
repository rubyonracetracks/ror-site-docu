/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('start.html', language)}>Get started now!</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <Container padding={['bottom', 'top']} background="dark">
        <h2>Welcome to Ruby on Racetracks!</h2>

        Ruby on Racetracks combines the power of Ruby on Rails with the speed of NASCAR. Ruby on Rails is a great framework, but the stock procedures are so slow and complicated. Ruby on Racetracks uses an infrastructure that provides the elements needed for all or most projects already pre-installed and thus allows you to bypass many of the slow and bureaucratic steps needed to get started. Doubling down on automation, cheat sheets, pre-installation, and good standard operating procedures enables not only much faster work but also much better quality control as well.
        <br /><br />
        In other words, Ruby on Racetracks has the same basic selling points as the much-advertised Hertz #1 Club Gold program, which touts the convenience and efficiency of bypassing the line at the rental counter. In contrast, using the time-consuming stock procedures provides an experience analogous to that of renting a car from Not Exactly Hertz in a Hertz commercial and enduring bad experiences like a long line at the rental counter, getting soaked by a torrential downpour, getting lost, and getting stranded.
        <br /><br />
        Ruby on Racetracks enables faster Ruby on Rails development while doubling down on quality control by adhering to these core principles:
          <ul>
            <li>Basic and routine tasks should be quick and easy.</li>
            <li>Maintenance should be quick and easy. If it isn’t, this magnifies the temptation to neglect it.</li>
            <li>A photographic memory should NOT be a requirement.</li>
            <li>That old Holiday Inn slogan was correct. The best surprise is no surprise.</li>
            <li>Large tasks should be broken down into many smaller tasks.</li>
          </ul>
        Long processes are the biggest obstacles in Ruby on Rails development. Even worse are long processes that require babysitting. It’s one thing for a long process to proceed without your intervention. It’s even worse when a process cannot proceed without your constant intervention. Installing Windows is a classic example of this.
        <br /><br />
        It adds insult to injury when a long process fails. At least when a short process fails, it doesn’t take up that much time, you don’t have to wait to see the failure, and you can take corrective action that much sooner.
        </Container>
      </div>
    );
  }
}

module.exports = Index;

import React from 'react';

export default class About extends React.Component {

  //About component
  render() {
    const aboutData = this.props.aboutData;
    return (
      <div id="about">
        <h1><img src="images/about.png" alt="about"/>{' '}About</h1>
        <div className="divider"></div>
        <div>
            <h3>{aboutData}</h3> 
        </div>
      </div>
    );
  }

};

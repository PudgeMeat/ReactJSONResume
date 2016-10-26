import React from 'react';

export default class Skills extends React.Component {

  render() {

    var getSkills = this.props.skillsData[0].keywords.map(function(item,i) {
      return (<li key={i}><span className="label label-success">{item}</span></li>)
    });
  	return (
  	  <div id="skills" >
        <h1><img src="images/skills.png" alt="about"/>Skills</h1>
        <div className="divider"></div>
        <ul className="interests-list list-inline">{getSkills}</ul>
      </div>
  	)
  }
};

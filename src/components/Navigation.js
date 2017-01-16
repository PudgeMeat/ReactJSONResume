import React from 'react';

export default class Navigation extends React.Component {

  render() {
    return (
            <div id='header'>
					      <ul id="main-menu">
    					    <li><a href="#about">About</a></li>
                  <li><a href="#education">Education</a></li>
        				  <li><a href="#skills">Skills</a></li>
                  <li><a href="#interests">Interests</a></li>  
    				    </ul>
            </div>
        );
  }
};
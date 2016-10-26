import React from 'react';
import Navigation from './Navigation'
import Profile from './Profile';
import Education from './Education';
import About from './About';
import Skills from './Skills';
import Interests from './Interests';
import $ from 'jquery';



export default class App extends React.Component {
 

  constructor(props) {
    super(props);
    this.state = {jsonObj: null};
    
    // using ajax call to get json data
    $.get(this.props.source, function(result) {
      	this.setState({jsonObj: result});
  		}.bind(this));
  }

  //Rendering components
  render() {
    if (this.state.jsonObj) {
      const profileData = this.state.jsonObj.basics;
      const aboutData=profileData.summary
      const skillsData = this.state.jsonObj.skills;
      const educationData = this.state.jsonObj.education;
      const interestsData = this.state.jsonObj.interests;
      // console.log(profileData)
      return (
              <div className="container">
                <div className="row">
                  <Navigation />
                </div>
                <div>
                  <aside className="col-md-4">
                    <div className="inner" >
                      <div id='scrolldiv'>
                        <Profile profileData={profileData} />
                      </div>  
                    </div>
                  </aside>
                  <main className="col-md-8">
                    <div className="inner"> 
                      <About aboutData={aboutData} />                    
                      <Education educationData={educationData} />
                      <Skills skillsData={skillsData} />
                      <Interests interestsData={interestsData} />                
                    </div>
                  </main>
                </div>
              </div>
            )

    }else{
      return <p>Fail to load json data...</p>
    }

  }

};

App.defaultProps = { jsonObj: null };

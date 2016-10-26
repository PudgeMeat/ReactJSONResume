import React from 'react';
import moment from 'moment';

export default class Education extends React.Component {

  render() {
      var getEducation = 	this.props.educationData.map(function(item,i) {
  		var startdate = moment(item.startDate).format("MMM, YYYY");
  		var enddate = moment(item.endDate).format("MMM, YYYY");
  		return (
          <div key={i} className="row">
            <div className="col-md-3">
              <img src={"images/" + item.code + ".png"} alt="EducationLogo"/>
            </div>
            <div className="col-md-8">
              <h4>{item.studyType} , {item.area}</h4>
  				    <h2>{item.institution}</h2>
  				    <p>Studied: {startdate} - {enddate}</p>
            </div>
  				</div>
        )
  	});
  	return (
  	  <div id="education">
        <h1><img src="images/education.png" alt="about"/>{' '}Education</h1>
        <div className="divider"></div>
        {getEducation}
      </div>
  	);
  }
};

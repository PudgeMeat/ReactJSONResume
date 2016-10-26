import React from 'react';

export default class Contact extends React.Component {

  render() {
      var getInterests =  this.props.interestsData.map(function(item,i) {
      return (
          <div key={i} className="col-md-3">
            <div className="row">
              <img src={"images/" + item.name + ".png"} alt="InterestLogo"/>
            </div>
            <div className="row">
              <h5>{item.description}</h5>
            </div>
          </div>
        )
    });
    return (
      <div id="interests">
        <h1><img src="images/interests.png" alt="interests"/>{' '}Interests</h1>
        <div className="divider"></div>
        {getInterests}     
      </div>
    );
  }
};
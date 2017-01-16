import React from 'react';

export default class Contact extends React.Component {

  render() {
      var getInterests =  this.props.interestsData.map(function(item,i) {
      return (
          <div key={i} className="col-md-2 col-sm-2 col-xs-2">
            <div className="row">
              <img className="interestImage" src={"images/" + item.name + ".png"} alt="InterestLogo" width="100%" height="100%"/>
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
        {getInterests}     
      </div>
    );
  }
};
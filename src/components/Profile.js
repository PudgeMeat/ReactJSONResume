import React from 'react';

export default class Profile extends React.Component {

  render() {
    const profileObj = this.props.profileData;
    return(
        <div>
            <div className="profileImg">
              <img className="img-thumbnail" src={profileObj.picture} width="250" alt="Profile"/>
            </div>
            <h2 className="text-center">{profileObj.name}</h2>
            <h3 className="text-center">{profileObj.label}</h3>
            <div className="divider"></div>
            <ul className="list-unstyled contact-links text-center">
                <li><i className="fa fa-lg fa-envelope"></i><a href="mailto:{profileObj.email}">{profileObj.email}</a></li>
                <li><i className="fa fa-lg fa-phone"></i><a href="mailto:{profileObj.phone}">{profileObj.phone}</a></li>
            </ul>
            <ul className="profileLinks list-inline text-center">
                <li><a className="fa fa-linkedin fa-2x" href={profileObj.profiles[0].url}></a></li>                
            </ul>     
        </div>
    ); 
  }
};

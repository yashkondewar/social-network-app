import React from "react";
import "./Profile.css";
// import Avatar from "@mui/material/Avatar"; 

function Profile() {
  
  return (
    <>
      
        {/* <div className="profile-card js-profile-card"> */}
          <div className="profile-card__cnt js-profile-cnt">
            <div className="profile-card__name">User Name</div>
            <div className="profile-card__txt">Website Developer</div>
            {/* <div className="profile-card-loc">
              <span className="profile-card-loc">
                <i className="material-icons">place</i>
              </span>
              <span className="profile-card-loc__txt">Latur, India </span>
            </div> */}

            <div className="profile-card-inf">
              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">1598</div>
                <div className="profile-card-inf__txt">Followers</div>
              </div>

              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">65</div>
                <div className="profile-card-inf__txt">Following</div>
              </div>

              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">123</div>
                <div className="profile-card-inf__txt">Post</div>
              </div>

              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">85</div>
                <div className="profile-card-inf__txt">Works</div>
              </div>
            </div>
            {/* to send the messsage for this user && follow  */}
            <div className="profile-card-ctr">
              <button
                className="profile-card__button button--blue js-message-btn" 
              >
                Message
              </button>
              <button className="profile-card__button button--orange">
                Logout
              </button>
            </div>
          </div>
        {/* </div> */}
        
    </>
  );
}

export default Profile;

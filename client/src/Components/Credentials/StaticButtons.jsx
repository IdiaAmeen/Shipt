import React from "react";
import "./StaticButtons.css";

function StaticButtons() {
  return (
    <div className="buttonDiv">
      <button className="appleButton staticButton">
        <div className="divAppleStyle">
          <img src="/Images/applelogo.png" alt="" width="60%" />
        </div>

        <p>Continue with Apple</p>
      </button>
      <button className="googleButton staticButton">
        <div className="divGoogleStyle">
          <img src="/Images/GoogleLogo.png" alt="" />
        </div>
        <p>Continue with Google</p>
      </button>
      <button className="facebookButton staticButton">
        <div className="divFacebookStyle">
          <img src="/Images/FbLogo.png" alt="" />
        </div>
        <p>Continue with Facebook</p>
      </button>
    </div>
  );
}
export default StaticButtons;

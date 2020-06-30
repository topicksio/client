import React from "react";
import Logo from "../assets/logo.svg";

export const Landing = () => {
  return (
    <div className="landing">
      <nav>
        <img src={Logo} alt="" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>
            <a href='https://id.twitch.tv/oauth2/authorize?client_id=mpjn8uocr7w1yt5b34ihtllgzlxfu1&amp;redirect_uri=http://localhost:3000/callback&amp;response_type=id_token&amp;scope=openid+user:read:email&amp;claims={"id_token":{"email":null,"email_verified":null,"picture":null, "preferred_username":null}}'>
              login with twitch
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

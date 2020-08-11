import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logoBLACK.png";

export const Landing = () => {
  return (
    <div className="landing">
      <nav>
        <img src={Logo} alt="" />
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a
              className="twitch"
              href='https://id.twitch.tv/oauth2/authorize?client_id=mpjn8uocr7w1yt5b34ihtllgzlxfu1&amp;redirect_uri=http://localhost:3000/callback&amp;response_type=id_token&amp;scope=openid+user:read:email&amp;claims={"id_token":{"email":null,"email_verified":null,"picture":null, "preferred_username":null}}'
            >
              Login With Twitch!
            </a>
          </li>
        </ul>
      </nav>
      <div className="main-landing">
        <div className="landing-left"></div>
        <div className="landing-right">
          <motion.div className="mock-card">
            <div>yo</div>
          </motion.div>
          <motion.div className="mock-card">
            <div>yo</div>
          </motion.div>
          <motion.div className="mock-card">
            <div>yo</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

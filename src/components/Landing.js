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
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            loop: Infinity,
            repeatDelay: 1,
          }}
        >
          <div>yo</div>
        </motion.div>
      </div>
    </div>
  );
};

import React from "react";

export const Landing = () => {
  return (
    <div className="sign-in">
      <a
        href="https://id.twitch.tv/oauth2/authorize?client_id=mpjn8uocr7w1yt5b34ihtllgzlxfu1&amp;redirect_uri=http://localhost:3000/callback&amp;response_type=code&amp;scope=user_read+channel:read:subscriptions&amp;force_verify=true"
        onClick={console.log(window.location)}
      >
        login with twitch
      </a>
    </div>
  );
};

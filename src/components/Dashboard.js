import React, { useState, useContext } from "react";

import { SingleTopic } from "./SingleTopic";
import { AddTopic } from "./AddTopic";

export const Dashboard = () => {
  const twitchLogin = () => {
    // const res = await fetch('https://id.twitch.tv/oauth2/authorize?client_id=mpjn8uocr7w1yt5b34ihtllgzlxfu1&amp;redirect_uri=http://localhost:3000/callback&amp;response_type=token&amp;scope=user_read+channel:read:subscriptions', {
    //   method: GET
    // })
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-info">
        <h2 className="dash-title">Dashboard</h2>
      </div>
      <SingleTopic />
    </div>
  );
};

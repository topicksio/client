import React, { useState, useContext } from "react";


import { SingleTopic } from "./SingleTopic";
import { AddTopic } from "./AddTopic";

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-info">
        <h2 className="dash-title">Dashboard</h2>
      </div>
      <SingleTopic />
    </div>
  );
};


import React, { useState, useContext } from "react";
import { TopicFolder } from './Topic'
import { GlobalContext } from "../context/DashboardStore";

export const Dashboard = () => {

  return (
    <div className="dashboard-container">
      <TopicFolder />
    </div>
  )
}

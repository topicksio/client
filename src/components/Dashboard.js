import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalStore";
import { SingleTopic } from "./SingleTopic";



export const Dashboard = () => {
  const { state, fetchValid } = useContext(
    GlobalContext
  );
  
  

  return (
    
    <div className="dashboard-container">
      
      <div className="dashboard-info">
        <h2 className="dash-title">Dashboard</h2>
        <h2 className="dash-title">{state.user}</h2>
        {/* <img src={state.picture} alt=""/> */}
      </div>
      <SingleTopic />
    </div>
  );
};

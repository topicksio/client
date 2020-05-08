import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalStore";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { SingleTopic } from "./SingleTopic";
import { AddTopic } from "./AddTopic";

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="title">Dashboard</h1>
      <SingleTopic />
      <AddTopic />
    </div>
  );
};

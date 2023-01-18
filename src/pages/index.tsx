import React from "react";
import withAuth from "@/Auth/withAuth";
import DashboardPageComponent from "@/PagesComponents/Dashboard";

const Home = () => {
  return <DashboardPageComponent />;
};

export default withAuth(Home);

import React from "react";
import Chart from "./featuredinfo/charts/Chart";
import Featuredinfo from "./featuredinfo/Featuredinfo";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart />
    </div>
  );
};

export default Home;

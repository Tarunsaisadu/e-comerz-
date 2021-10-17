import React from "react";
import Chart from "./featuredinfo/charts/Chart";
import Featuredinfo from "./featuredinfo/Featuredinfo";
import "./home.css";
import WidgetLg from "./widegtLg/WidgetLg";
import WidgetSm from "./widegtSm/WidgetSm";
const Home = () => {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;

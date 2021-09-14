import React from "react";

// components
import Layout from "../components/layout.js";
// import CardLineChart from "../components/Cards/CardLineChart.js";
// import CardBarChart from "../components/Cards/CardBarChart.js";
import CardIterationList from "../components/Cards/CardIterationList.js";
import CardTasksList from "../components/Cards/CardTasksList.js";
import CardTasksByIterationList from "../components/Cards/CardTasksByIterationList.js";

export default function Goals() {
  return (
    <>
      <Layout card="">
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardTasksByIterationList />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardIterationList />
          </div>
        </div>
        {/*<div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>*/}
      </Layout>
    </>
  );
}

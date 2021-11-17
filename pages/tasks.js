import React from "react";

// components
import Layout from '../components/layout.js'
// import CardLineChart from "../components/Cards/CardLineChart.js";
// import CardBarChart from "../components/Cards/CardBarChart.js";
import CardIterationList from "../components/Cards/CardIterationList.js";
import CardTasksByGoalList from "../components/Cards/CardTasksByGoalList.js";

export default function Goals() {

  const tasks = [
  {"id":1,"name":"wake up", "description": "my Hy", "completed": "2021-08-02", "goal":1},
  {"id":2,"name":"take a shower", "description": "my description", "completed": "2021-08-02", "goal":1},
  {"id":3,"name":"sleep", "description": "my description", "completed": "2021-08-02", "goal":2},
  {"id":4,"name":"eat",  "description": "my description", "completed": "2021-08-02", "goal":"become a software developer"},
  ]

  const iterations = [
    {"id":1,"number":"1", "description": "my Hy", "date": "2021-08-02", "completed":'true'},
    {"id":2,"number":"2", "description": "my description", "date": "2021-08-02", "completed":'true'},
    {"id":3,"number":"3", "description": "my description", "date": "2021-08-02", "completed": "false"},
    {"id":4,"number":"4",  "description": "my description", "date": "2021-08-02", "completed":"true"},
  ]
  return (
    <>
    <Layout card='' loginRequired={true}>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardTasksByGoalList tasks={tasks}/>
        </div>
        <div className="w-full xl:w-4/12 px-4">
        
          <CardIterationList iterations={iterations}/>
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

import React from "react";
import { useRouter } from "next/router";

// components
import Layout from "../../../components/layout.js";
// import CardLineChart from "../components/Cards/CardLineChart.js";
// import CardBarChart from "../components/Cards/CardBarChart.js";
import CardTasksByStepList from "../../../components/Cards/CardTasksByStepList.js";
import CardTasksByStepAndIterationList from "../../../components/Cards/CardTasksByStepAndIterationList";
import CardTasksList from "../../../components/Cards/CardTasksList.js";
import { useGoal, useStep } from "../../../data/use-data.js";

export default function Goals() {
  const router = useRouter();
  const { pid } = router.query;

  const {step} = useStep(pid ? pid : null)
  const{goal} = useGoal(step ? step.goal : null)
  console.log(step)
  console.log(goal)

  
  const tasks = [
    {
      id: 1,
      url: "#",
      name: "wake upfsdfsdfs sfdsfd",
      description: "my Hy sdf sf",
      completed: true,
      goal: 1,
    },
    {
      id: 2,
      url: "#",
      name: "take a shower sdfsdfsdf sdfsdfsf sdfs dfs df sdfs dfsd fsdf  sdfsdf sdf",
      description: " fff my description",
      completed: false,
      goal: 1,
    },
    {
      id: 3,
      url: "#",
      name: "sleep",
      description: "my description sdf",
      completed: true,
      goal: 2,
    },
    {
      id: 4,
      url: "#",
      name: "eat",
      description: "my description sdf",
      completed: false,
      goal: "r",
    },
  ];

  const todo = [
    {
      id: 1,
      url: "#",
      name: "wake up",
      description: "my Hy",
      completed: true,
      goal: 1,
    },
    {
      id: 2,
      url: "#",
      name: "take a shower",
      description: "my description",
      completed: false,
      goal: 1,
    },
    {
      id: 3,
      url: "#",
      name: "sleep",
      description: "my description",
      completed: true,
      goal: 2,
    },
    {
      id: 4,
      url: "#",
      name: "eat",
      description: "my description",
      completed: false,
      goal: "r",
    },
  ];

  const stats = [
    {
      id: 1,
      statSubtitle: "Status",
      statTitle: "Active",
      statArrow: "down",
      statPercent: "3.48",
      statPercentColor: "text-yellow-500",
      statDescripiron: "last month",
      statIconName: "far fa-heart",
      statIconColor: "bg-red-500",
    },
    {
      id: 2,
      statSubtitle: "Need",
      statTitle: goal ? goal.need.name.substring(0,10) : "",
      statArrow: "down",
      statPercent: "3.48",
      statPercentColor: "text-yellow-500",
      statDescripiron: "last month",
      statIconName: "far fa-heart",
      statIconColor: "bg-red-500",
    },
    {
      id: 3,
      statSubtitle: "completed",
      statTitle: step ? step.percentageCompleted.substring(0,5) : "",
      statArrow: "up",
      statPercent: "3.48",
      statPercentColor: "text-yellow-500",
      statDescripiron: "last month",
      statIconName: "far fa-heart",
      statIconColor: "bg-red-500",
    },
    {
      id: 4,
      statSubtitle: "",
      statTitle: "",
      statArrow: "",
      statPercent: "",
      statPercentColor: "",
      statDescripiron: "",
      statIconName: "",
      statIconColor: "",
    },
    {
      id: 5,
      statSubtitle: "",
      statTitle: "",
      statArrow: "",
      statPercent: "",
      statPercentColor: "",
      statDescripiron: "",
      statIconName: "",
      statIconColor: "",
    },
  ];
  return (
    <>
      <Layout statsList={stats}>
        <div className="flex flex-wrap mt-4">
          {/*<div className="w-full mb-12 xl:mb-0 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded text-center p-5">
          <h1 className="text-4xl">Get a software develloper job</h1>
          <p className="mt-4">Loren ipsum xxxxx</p>
          </div>
        </div>*/}
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardTasksByStepList tasks={tasks} step={pid} />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardTasksByStepAndIterationList tasks={todo} step={pid} />
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

import React from "react";

// components
import Layout from "../../components/layout.js";
// import CardLineChart from "../components/Cards/CardLineChart.js";
// import CardBarChart from "../components/Cards/CardBarChart.js";
import CardStepsByGoalList from "../../components/Cards/CardStepsByGoalList.js";
import CardTasksByGoalAndIterationList from "../../components/Cards/CardTasksByGoalAndIterationList.js";
import CardTasksList from "../../components/Cards/CardTasksList.js";
import { useGoal } from "../../data/use-data";
import { useRouter } from "next/router";

export default function Goals() {
  const router = useRouter();
  const { pid } = router.query;

  const { goal, goalLoading, goalLoggedOut } = useGoal(pid);
  console.log("loading" + goalLoading);
  console.log(goal);

  const steps = [
    { id: 1, name: "Learn that", endDate: "2021-08-02", need: 1 },
    {
      id: 2,
      name: "Build a project using that",
      endDate: "2021-08-02",
      need: 1,
    },
    { id: 3, name: "my description", endDate: "2021-08-02", need: 2 },
    { id: 4, name: "my description", endDate: "2021-08-02", need: 3 },
  ];

  const tasks = [
    {
      id: 1,
      url: "#",
      name: "wake ussssssssss ssssssssss dddddddd dddddddddddd",
      description: "my Hy",
      completed: true,
      goal: 1,
    },
    {
      id: 2,
      url: "#",
      name: "take a sf",
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
      statTitle: "Health",
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
      statTitle: "66%",
      statArrow: "down",
      statPercent: "3.48",
      statPercentColor: "text-yellow-500",
      statDescripiron: "last month",
      statIconName: "far fa-heart",
      statIconColor: "bg-red-500",
    },
    {
      id: 4,
      statSubtitle: "End-Date",
      statTitle: goal ? goal.endDate : "",
      statArrow: "down",
      statPercent: "3.48",
      statPercentColor: "text-yellow-500",
      statDescripiron: "last month",
      statIconName: "far fa-heart",
      statIconColor: "bg-red-500",
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
      <Layout statsList={stats} loginRequired={true}>
        <div className="flex flex-wrap mt-4">
          {/*<div className="w-full mb-12 xl:mb-0 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded text-center p-5">
          <h1 className="text-4xl">Get a software develloper job</h1>
          <p className="mt-4">Loren ipsum xxxxx</p>
          </div>
        </div>*/}
          <div className="w-full xl:w-7/12 mb-12 xl:mb-0 px-4">
            <CardStepsByGoalList
              steps={steps}
              name={goal ? goal.name : null}
              goal={pid}
            />
          </div>
          <div className="w-full xl:w-5/12 px-4">
            <CardTasksByGoalAndIterationList tasks={tasks} goal={pid} />
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

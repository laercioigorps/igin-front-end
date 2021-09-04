import { useUser } from "../data/use-data";
import { useEffect } from "react";
import Router from "next/router";
import { useRouter } from "next/router";
// components
import HeaderStats from "../components/Headers/HeaderStats.js";
import Layout from "../components/layout.js";
// import CardLineChart from "../components/Cards/CardLineChart.js";
// import CardBarChart from "../components/Cards/CardBarChart.js";
import CardTasksByIterationList from "../components/Cards/CardTasksByIterationList";
import CardGoalList from "../components/Cards/CardGoalList.js";

export default function Dashboard() {
  // if logged out, redirect to the homepage
  const { user, loading, loggedOut } = useUser();
  const router = useRouter();
  useEffect(() => (loggedOut ? router.push("/auth/login") : null));
  //const { data, loading, loggedOut} = useNeeds();

  const tasks = [
    {
      id: 1,
      url: "#",
      name: "wake upssssssssssss",
      description: "my Hy",
      completed: false,
      goal: "get a software develloper job",
      step: "build a website",
    },
    {
      id: 2,
      url: "#",
      name: "take a shower",
      description: "my description",
      completed: "2021-08-02",
      goal: 1,
    },
    {
      id: 3,
      url: "#",
      name: "sleep",
      description: "my description",
      completed: "2021-08-02",
      goal: 2,
    },
    {
      id: 4,
      url: "#",
      name: "eat",
      description: "my description",
      completed: true,
      goal: "be",
    },
  ];

  const goals = [
    { id: 1, name: "daslse", endDate: "2021-08-02", need: 1 },
    { id: 2, name: "Familly historical data", endDate: "2021-08-02", need: 1 },
    { id: 3, name: "my description", endDate: "2021-08-02", need: 2 },
    { id: 4, name: "my description", endDate: "2021-08-02", need: 3 },
  ];

  return (
    <>
      <Layout cond="true" wizard="true" statsList={false}>
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-7/12 mb-12 xl:mb-0 px-4">
            <CardTasksByIterationList />
          </div>
          <div className="w-full xl:w-5/12 px-4">
            <CardGoalList goals={goals} />
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
